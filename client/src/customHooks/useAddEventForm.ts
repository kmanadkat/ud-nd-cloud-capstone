import { useEffect, useState } from "react"
import { toyyyymmdd } from "../utils"

const useAddEventForm = (startDate: Date) => {
  const [formState, setFormState] = useState({
    title: '',
    description: '',
    location: '',
    allDay: true,
    startDate: toyyyymmdd(startDate),
    startTime: '',
    endDate: toyyyymmdd(startDate),
    endTime: ''
  })

  useEffect(() => {
    setFormState(prevState => ({
      ...prevState,
      startDate: toyyyymmdd(startDate),
      endDate: toyyyymmdd(startDate)
    }))
  }, [startDate])

  const handleInputTextChange = (event: any) => {
    const nameAtt = event.target.name
    setFormState(prevState => ({ ...prevState, [nameAtt]: event.target.value }))
  }

  const handleInputCheckbox = (event: any) => {
    const value = event.target.checked
    setFormState(prevState => ({ ...prevState, allDay: value }))
  }

  const resetFormState = () => {
    setFormState({
      title: '',
      description: '',
      location: '',
      allDay: true,
      startDate: toyyyymmdd(startDate),
      startTime: '',
      endDate: toyyyymmdd(startDate),
      endTime: ''
    })
  }

  return {formState, handleInputCheckbox, handleInputTextChange, resetFormState}
}

export default useAddEventForm