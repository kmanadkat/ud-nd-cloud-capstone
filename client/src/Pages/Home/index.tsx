import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Calendar from "../../components/Calendar";
import EventInfo from "../../components/EventInfo";
import Header from "../../components/Header";
import ModalForm from "../../components/ModalForm";
import { Event } from "../../types/Event";
import { mockData } from "../../utils/mockData";


const Home = () => {
  const {eventsData, userName} = mockData
  const [events, _setEvents] = useState(eventsData)
  const [selectedEvent, _setSelectedEvent] = useState<null | Event>(null)
  let [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
  }

  const handleDateClick = (dateArgs: any) => {
    console.log(dateArgs)
    setIsOpen(true)
  }

  const handleEventClick = (eventArgs: any) => {
    const { event } = eventArgs
    console.log(event)
    const eventIndex = events.findIndex(item => item.id === event.id)
    if(eventIndex !== -1) {
      _setSelectedEvent(events[eventIndex])
    }
  }

  const handleDeleteEvent = (eventId: string) => {
    _setEvents((prevState) => prevState.filter(item => item.id !== eventId))
    _setSelectedEvent(null)
    toast.success("Event deleted!", {duration: 4000})
  }

  return (
    <>
      <Toaster position="bottom-center" />
      <Header username={userName} />
      <div className="app-wrapper grid grid-cols-1 lg:grid-cols-10 p-6 md:p-12 gap-12">
        <div className="calendar-wrapper lg:col-span-7">
          <Calendar events={events} onEventClick={handleEventClick} onDateClick={handleDateClick} />
        </div>
        <div className="event-wrapper lg:col-span-3">
          <EventInfo event={selectedEvent} onDelete={handleDeleteEvent} />
          <ModalForm isOpen={isOpen} closeModal={closeModal} />
        </div>
      </div>
    </>
  )
}

export default Home