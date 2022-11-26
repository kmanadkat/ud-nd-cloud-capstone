import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import * as middy from 'middy'
import { cors, httpErrorHandler } from 'middy/middlewares'

import { deleteEvent } from '../../businessLogic/events'
import { getUserId } from '../utils'

export const handler = middy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const eventId = event.pathParameters.eventId
    const isEventDeleted = await deleteEvent(eventId, getUserId(event))
    
    return {
      statusCode: isEventDeleted ? 200 : 400,
      body: ''
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
