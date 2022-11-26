import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import * as middy from 'middy'
import { cors } from 'middy/middlewares'

import { getEventsForUser } from '../../businessLogic/events'
import { getUserId } from '../utils';


export const handler = middy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const userId = getUserId(event)
    const events = await getEventsForUser(userId)

    return {
      statusCode: 200,
      body: JSON.stringify({ items: events })
    }
})

handler.use(
  cors({
    credentials: true
  })
)
