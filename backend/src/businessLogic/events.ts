import * as uuid from 'uuid'
import { EventAccess } from "../dataLayer/eventsAccess"
import { EventItem } from "../models/EventItem"
import { CreateEventRequest } from '../requests/CreateEventRequest'


const eventAccess = new EventAccess()

export const createEvent = async (createEventRequest: CreateEventRequest, userId: string): Promise<EventItem> => {
  const eventId = uuid.v4()
  const eventItem: EventItem = {
    userId,
    eventId,
    createdAt: new Date().toDateString(),
    title: createEventRequest.title,
    location: createEventRequest.location,
    start: createEventRequest.start,
    end: createEventRequest.end,
    description: createEventRequest.description,
    attachmentUrl: '',
  }
  return await eventAccess.createEvent(eventItem)
}

export const deleteEvent = async (eventId: string, userId: string): Promise<boolean> => {
  return await eventAccess.deleteEvent(eventId, userId)
}

export const createAttachmentPresignedUrl = async (eventId: string, userId: string): Promise<string> => {
  return await eventAccess.generateUploadUrl(eventId, userId)
}

export const getEventsForUser = async (userId: string) => {
  const events = await eventAccess.getAllEvents(userId)
  return events
}