import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { Event } from "../types/Event"
import { mockData } from "../utils/mockData"

const useEvent = () => {
  const [events, setEvents] = useState<Event[]>([])
  const [selectedEvent, setSelectedEvent] = useState<any>(null)

  // Fetch User Events
  useEffect(() => {
    const {eventsData} = mockData
    setEvents(eventsData)
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
  const addEvent = () => {

  }

  // Remove Event API
  const removeEvent = (eventId: string) => {
    setEvents((prevState) => prevState.filter(item => item.eventId !== eventId))
    setSelectedEvent(null)
    toast.success("Event deleted!", { duration: 4000 })
  }

  // Update Event API
  const updateEvent = () => {

  }

  return {events, selectedEvent, addEvent, selectEvent, removeEvent, updateEvent}
}

export default useEvent