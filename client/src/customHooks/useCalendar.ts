import { useState } from "react"

const useCalendar = () => { 
  const [selectedDate, _setSelectedDate] = useState<Date>(new Date())
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
  }
  
  const handleDateClick = (dateArgs: any) => {
    _setSelectedDate(dateArgs.start)
    setIsOpen(true)
  }

  return {
    selectedDate,
    handleDateClick,
    isOpen,
    closeModal
  }
}

export default useCalendar