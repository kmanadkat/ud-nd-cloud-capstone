import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import * as middy from 'middy'
import { cors, httpErrorHandler } from 'middy/middlewares'
import { createAttachmentPresignedUrl } from '../../businessLogic/events'
import { getUserId } from '../utils'

export const handler = middy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const eventId = event.pathParameters.eventId
    const signedUploadUrl = await createAttachmentPresignedUrl(eventId, getUserId(event))

    return {
      statusCode: signedUploadUrl ? 200 : 400,
      body: JSON.stringify({ uploadUrl: signedUploadUrl })
    }
  }
)

handler
  .use(httpErrorHandler())
  .use(
    cors({
      credentials: true
    })
  )
