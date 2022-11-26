import { useState } from "react"

const useCalendar = () => { 
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [isAddEventModalOpen, setIsAddEventModalOpen] = useState(false)
  const [isUpdateEventModalOpen, setIsUpdateEventModalOpen] = useState(false)

  const closeAddEventModal = () => {
    setIsAddEventModalOpen(false)
  }
  
  const handleDateClick = (dateArgs: any) => {
    setSelectedDate(dateArgs.start)
    setIsAddEventModalOpen(true)
  }

  return {
    selectedDate,
    handleDateClick,
    isAddEventModalOpen,
    closeAddEventModal,
    isUpdateEventModalOpen,
    setIsUpdateEventModalOpen
  }
}

export default useCalendar