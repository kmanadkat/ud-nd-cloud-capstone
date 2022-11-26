import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { createEvent, deleteEvent, getEvents, getUploadUrl, uploadFile } from "../api/events-api"
import auth from "../auth/auth"
import { bucketUrl } from "../config"
import { AddEventState } from "../types/AddEventState"
import { CreateEventRequest } from "../types/CreateEventRequest"
import { Event } from "../types/Event"
import { attachIdToEvents, getDateStringForDB } from "../utils"

const useEvent = () => {
  const [events, setEvents] = useState<Event[]>([])
  const [selectedEvent, setSelectedEvent] = useState<any>(null)

  // Fetch User Events
  useEffect(() => {
    const eventsFetchPromise = getEvents(
      auth.getIdToken()
    ).then(data => setEvents(attachIdToEvents(data)))
    toast.promise(
      eventsFetchPromise, {
      loading: 'Fetching Events',
      success: 'Events Loaded',
      error: 'Error occured!',
    })
  }, [])

  // Handle Event Selection
  const selectEvent = (eventArgs: any) => {
    const { event } = eventArgs
    const eventIndex = events.findIndex(item => item.eventId === event.id)
    if (eventIndex !== -1) {
      setSelectedEvent(events[eventIndex])
    }
  }

  // Add New Event API
  const addEvent = (eventData: AddEventState, closeModal: () => void) => {
    const newEvent: CreateEventRequest = {
      title: eventData.title,
      description: eventData.description,
      location: eventData.location,
      start: eventData.allDay ? eventData.startDate : getDateStringForDB(eventData.startDate, eventData.startTime),
      end: eventData.allDay ? eventData.endDate : getDateStringForDB(eventData.endDate, eventData.endTime)
    }
    const eventCreatePromise = createEvent(auth.getIdToken(), newEvent).then(newEvent => {
      setEvents(prevState => [...prevState, {...newEvent, id: newEvent.eventId}])
      closeModal()
    })
    toast.promise(
      eventCreatePromise, {
      loading: 'Creating New Event',
      success: 'Done',
      error: 'Error occured!',
    })
    
  }

  // Remove Event API
  const removeEvent = (eventId: string) => {
    const deleteEventPromise = deleteEvent(auth.getIdToken(), eventId).then(() => {
      setEvents((prevState) => prevState.filter(item => item.eventId !== eventId))
      setSelectedEvent(null)
    })
    toast.promise(
      deleteEventPromise, {
        loading: 'Deleting Event',
        success: 'Done',
        error: 'Error occured!'
      }
    )
  }

  // Update Event API
  const updateEvent = async (eventId: string, attachmentFile: Buffer) => {
    try {
      const uploadUrl = await getUploadUrl(auth.getIdToken(), eventId)
      await uploadFile(uploadUrl, attachmentFile)
      setEvents(prevState => prevState.map(item => ({
        ...item,
        attachmentUrl: item.eventId === eventId ? `${bucketUrl}${eventId}` : item.attachmentUrl
      })))
      setSelectedEvent((prevState:any) => ({...prevState, attachmentUrl: `${bucketUrl}${eventId}`}))
      return true
    } catch(err) {
      console.error(err)
      throw new Error('Error occured uploading file')
    }
  }

  return {events, selectedEvent, addEvent, selectEvent, removeEvent, updateEvent}
}

export default useEvent