export interface Event {
  id: string
  eventId: string
  userId: string
  title: string
  start: string
  end: string
  location: string
  description?: string
  attachmentUrl?: string
}