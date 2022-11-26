import CloseIcon from '../../assets/close.svg'
import InputCheckbox from '../InputCheckbox'
import InputDateTime from '../InputDateTime'
import InputText from '../InputText'

const AddEventForm = ({closeModal, formState, onInputTextChange, onCheckboxChange}: AddEventFormProps) => {
  return (
    <div className="form-wrapper pt-2 px-4">
      <div className="form-header flex justify-between items-center border-b px-8 py-6">
        <h3 className='font-semibold text-gray-800'>Add a New Event</h3>
        <button onClick={closeModal} className="border-none outline-none">
          <img src={CloseIcon} alt="Close Icon" />
        </button>
      </div>
      <div className='form-fields py-8'>
        <form action="">
          <InputText 
            label='Event Name'
            name='name'
            isRequired={true}
            isDisabled={false}
            value={formState.name}
            onChange={onInputTextChange} />
          <InputText 
            label='Event Description'
            name='description'
            isRequired={false}
            isDisabled={false}
            value={formState.description}
            onChange={onInputTextChange} />
          <InputText 
            label='Event Location'
            name='location'
            isRequired={true}
            isDisabled={false}
            value={formState.location}
            onChange={onInputTextChange} />
          <InputCheckbox
            label='All day'
            value={formState.allDay}
            handleOnChange={onCheckboxChange}
            isRequired={false} />
          <div className='flex justify-between px-8'>
            <InputDateTime
              name="startDate"
              type='date'
              label='Event Start Date'
              value={formState.startDate}
              onChange={onInputTextChange}
              isRequired={true} />
            {!formState.allDay && <InputDateTime
              name="startTime"
              type='time'
              label='Event Start Time'
              value={formState.startTime}
              onChange={onInputTextChange}
              isRequired={true} />}
          </div>
          <div className='flex justify-between px-8'>
            <InputDateTime
              name="endDate"
              type='date'
              label='Event End Date'
              value={formState.endDate}
              onChange={onInputTextChange}
              isRequired={true} />
            {!formState.allDay && <InputDateTime
              name="endTime"
              type='time'
              label='Event End Time'
              value={formState.endTime}
              onChange={onInputTextChange}
              isRequired={true} />}
          </div>

          <div className="form-footer flex justify-center items-center gap-6 border-t mt-4 pt-6">
            <button className='px-5 py-3 bg-gray-200 active:bg-gray-300 rounded text-sm' onClick={closeModal}>Cancel</button>
            <button className='px-5 py-3 bg-blue-600 active:bg-blue-700 rounded text-sm text-white' type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

type AddEventFormProps = {
  closeModal: () => void
  formState: any
  onInputTextChange: (event: any) => void
  onCheckboxChange: (event: any) => void
}

export default AddEventForm