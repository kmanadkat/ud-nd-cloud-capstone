import { Event } from "../../types/Event"
import CloseIcon from '../../assets/close.svg'
import InputFile from "../InputFile"

const UpdateEventForm = ({event, closeModal}: UpdateEventFormProps) => {
  return (
    <div className="form-wrapper pt-2 px-4">
      <div className="form-header flex justify-between items-center border-b px-8 py-6">
        <h3 className='font-semibold text-gray-800'>Add Event Attachment</h3>
        <button onClick={closeModal} className="border-none outline-none">
          <img src={CloseIcon} alt="Close Icon" />
        </button>
      </div>
      <div className='form-fields py-8'>
        <form action="">
          {/* Image Attachment */}
          <InputFile label="Event Venue" />
          <div className="form-footer flex justify-center items-center gap-6 border-t mt-4 pt-6">
            <button className='px-5 py-3 bg-gray-200 active:bg-gray-300 rounded text-sm' onClick={closeModal}>Cancel</button>
            <button className='px-5 py-3 bg-blue-600 active:bg-blue-700 rounded text-sm text-white' type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

type UpdateEventFormProps = {
  event: Event
  closeModal: () => void
}

export default UpdateEventForm