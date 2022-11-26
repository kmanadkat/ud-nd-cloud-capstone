import { Toaster } from "react-hot-toast";
import AddEventForm from "../../components/AddEventForm";
import Calendar from "../../components/Calendar";
import EventInfo from "../../components/EventInfo";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import useAddEventForm from "../../customHooks/useAddEventForm";
import useCalendar from "../../customHooks/useCalendar";
import useEvent from "../../customHooks/useEvent";
import { mockData } from "../../utils/mockData";


const Home = () => {
  const { userName } = mockData
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
    isOpen,
    closeModal
  } = useCalendar()

  const {formState, handleInputCheckbox, handleInputTextChange} = useAddEventForm(selectedDate)

  return (
    <>
      <Toaster position="bottom-center" />
      <Header username={userName} />
      <div className="app-wrapper grid grid-cols-1 lg:grid-cols-10 p-6 md:p-12 gap-12">
        <div className="calendar-wrapper lg:col-span-7">
          <Calendar events={events} onEventClick={selectEvent} onDateClick={handleDateClick} />
        </div>
        <div className="event-wrapper lg:col-span-3">
          <EventInfo event={selectedEvent} onDelete={removeEvent} />
          <Modal isOpen={isOpen} closeModal={closeModal}>
            <AddEventForm 
              closeModal={closeModal}
              formState={formState}
              onInputTextChange={handleInputTextChange}
              onCheckboxChange={handleInputCheckbox} />
          </Modal>
        </div>
      </div>
    </>
  )
}

export default Home