import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import * as middy from 'middy'
import { cors } from 'middy/middlewares'
import { createTodo } from '../../businessLogic/events';
import { TodoItem } from '../../models/EventItem';
import { CreateTodoRequest } from '../../requests/CreateEventRequest'
import { getUserId } from '../utils';


export const handler = middy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const newTodo: CreateTodoRequest = JSON.parse(event.body)
    const todoItem: TodoItem = await createTodo(newTodo, getUserId(event))

    return {
      statusCode: 201,
      body: JSON.stringify({ item: todoItem })
    }
})

handler.use(
  cors({
    credentials: true
  })
)
