import * as AWS  from 'aws-sdk'
import * as AWSXRay from 'aws-xray-sdk'
import { DocumentClient } from 'aws-sdk/clients/dynamodb'
import { EventItem } from '../models/EventItem'
import { createLogger } from '../utils/logger'

const logger = createLogger('events')
const XAWS = AWSXRay.captureAWS(AWS)

export class EventAccess {
  constructor(
    private readonly docClient: DocumentClient = new XAWS.DynamoDB.DocumentClient(),
    private readonly eventsTable = process.env.EVENTS_TABLE,
    private readonly indexName = process.env.EVENTS_CREATED_AT_INDEX,
    private readonly s3Client = new XAWS.S3({ signatureVersion: 'v4' }),
    private readonly bucketName = process.env.ATTACHMENT_S3_BUCKET,
    private readonly urlExpiration = process.env.SIGNED_URL_EXPIRATION) {
  }

  async getAllEvents(userId: string): Promise<EventItem[]> {
    logger.info('Getting all events for user', { userId })

    const result = await this.docClient.query({
      TableName: this.eventsTable,
      IndexName: this.indexName,
      KeyConditionExpression: 'userId= :userId',
      ExpressionAttributeValues: {
        ':userId': userId
      },
      ScanIndexForward: false
    }).promise()

    const items = result.Items as EventItem[]
    return items
  }


  async createEvent(event: EventItem): Promise<EventItem> {
    logger.info('Creating new Event', {eventUd: event.eventId, userId: event.userId})

    await this.docClient.put({
      TableName: this.eventsTable,
      Item: event
    }).promise()

    return event
  }

  async deleteEvent(eventId: string, userId: string): Promise<boolean> {
    logger.info('Delete Event', { eventId, userId })
    try {
      // Delete Event From DynamoDB
      await this.docClient.delete({
        TableName: this.eventsTable,
        Key: { eventId, userId }
      }).promise()

      // Delete Event Attachment If Any
      this.s3Client.deleteObject({
        Bucket: this.bucketName,
        Key: eventId
      }, (err, _data) => {
        if(err) logger.info('Attachment Delete For Event', {err})

        logger.info('Attachment Successfully deleted', { eventId })
      })

      return true
    } catch (error) {
      logger.error('Delete Event Error', { eventId, userId, message: error.message })
      return false
    }
  }

  async generateUploadUrl(eventId: string, userId: string): Promise<string> {
    logger.info('Generate Upload URL For Event Attachment', { eventId })
    const newAttachmentURL = `https://${this.bucketName}.s3.amazonaws.com/${eventId}`
    try {
      await this.docClient.update({
        TableName: this.eventsTable,
        Key: { eventId, userId },
        UpdateExpression: 'set #attachmentUrl = :newURL',
        ExpressionAttributeValues: { ':newURL': newAttachmentURL },
        ExpressionAttributeNames: { '#attachmentUrl': 'attachmentUrl'}
      }).promise()

      return this.s3Client.getSignedUrl('putObject', {
        Bucket: this.bucketName,
        Key: eventId,
        Expires: parseInt(this.urlExpiration),
      });
    } catch (error) {
      logger.error('Generate Upload URL For Event Attachment Error', { eventId, message: error.message })
      return ''
    }
  }
}