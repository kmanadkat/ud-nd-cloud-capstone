/**
 * Fields in a request to create a single Event item.
 */
export interface CreateEventRequest {
  title: string
  location: string
  start: string
  end: string
  description: string
}
