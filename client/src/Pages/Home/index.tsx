import { Toaster } from "react-hot-toast";
import Calendar from "../../components/Calendar";
import EventInfo from "../../components/EventInfo";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import AddEventForm from "../../components/AddEventForm";
import UpdateEventForm from "../../components/UpdateEventForm";
import useAddEventForm from "../../customHooks/useAddEventForm";
import useCalendar from "../../customHooks/useCalendar";
import useEvent from "../../customHooks/useEvent";

const Home = () => {
  const { 
    events,
    selectedEvent,
    addEvent,
    selectEvent,
    updateEvent,
    removeEvent
  } = useEvent()

  const {
    selectedDate,
    handleDateClick,
    isAddEventModalOpen,
    closeAddEventModal,
    isUpdateEventModalOpen,
    setIsUpdateEventModalOpen
  } = useCalendar()

  const {formState, handleInputCheckbox, handleInputTextChange} = useAddEventForm(selectedDate)

  return (
    <>
      <Toaster position="bottom-center" toastOptions={{duration: 4000}} />
      <Header />
      <div className="app-wrapper grid grid-cols-1 lg:grid-cols-12 p-6 md:p-12 gap-12">
        <div className="calendar-wrapper lg:col-span-8">
          <Calendar events={events} onEventClick={selectEvent} onDateClick={handleDateClick} />
        </div>
        <div className="event-wrapper lg:col-span-4">
          <EventInfo 
            event={selectedEvent} 
            onDelete={removeEvent} 
            onEdit={() => setIsUpdateEventModalOpen(true)} />
          <Modal isOpen={isAddEventModalOpen} closeModal={closeAddEventModal}>
            <AddEventForm 
              closeModal={closeAddEventModal}
              formState={formState}
              onInputTextChange={handleInputTextChange}
              onCheckboxChange={handleInputCheckbox}
              onSubmit={addEvent} />
          </Modal>
          <Modal isOpen={isUpdateEventModalOpen} closeModal={() => setIsUpdateEventModalOpen(false)}>
            <UpdateEventForm 
              event={selectedEvent}
              closeModal={() => setIsUpdateEventModalOpen(false)} />
          </Modal>
        </div>
      </div>
    </>
  )
}

export default Home