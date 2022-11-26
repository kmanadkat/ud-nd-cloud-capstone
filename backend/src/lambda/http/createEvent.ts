import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import * as middy from 'middy'
import { cors } from 'middy/middlewares'
import { createEvent } from '../../businessLogic/events';
import { EventItem } from '../../models/EventItem';
import { CreateEventRequest } from '../../requests/CreateEventRequest'
import { getUserId } from '../utils';


export const handler = middy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const newEvent: CreateEventRequest = JSON.parse(event.body)
    const eventItem: EventItem = await createEvent(newEvent, getUserId(event))

    return {
      statusCode: 201,
      body: JSON.stringify({ item: eventItem })
    }
})

handler.use(
  cors({
    credentials: true
  })
)
