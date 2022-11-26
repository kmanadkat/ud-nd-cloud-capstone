import { Event } from "../../types/Event"
import CloseIcon from '../../assets/close.svg'
import InputFile from "../InputFile"
import toast from "react-hot-toast"

const UpdateEventForm = ({
  event,
  currentFile,
  handleFileChange,
  resetFile,
  updateModalState,
  onSubmit
}: UpdateEventFormProps) => {

  const handleCloseModal = () => {
    resetFile()
    updateModalState(false)
  }

  const handleSubmit = (eve: any) => {
    eve.preventDefault()
    if(currentFile) {
      const uploadEventPromise = onSubmit(event.eventId, currentFile).then(() => {
        resetFile();
        handleCloseModal();
      })
      toast.promise(uploadEventPromise, {
        loading: 'Uploading File',
        success: 'Done',
        error: 'Error Occured!'
      })
    }
  }

  return (
    <div className="form-wrapper pt-2 px-4">
      <div className="form-header flex justify-between items-center border-b px-8 py-6">
        <h3 className='font-semibold text-gray-800'>Add Event Attachment</h3>
        <button onClick={handleCloseModal} className="border-none outline-none">
          <img src={CloseIcon} alt="Close Icon" />
        </button>
      </div>
      <div className='form-fields py-8'>
        <form onSubmit={handleSubmit}>
          {/* Image Attachment */}
          <InputFile label="Event Venue" handleChange={handleFileChange} />
          <div className="form-footer flex justify-center items-center gap-6 border-t mt-4 pt-6">
            <button className='px-5 py-3 bg-gray-200 active:bg-gray-300 rounded text-sm' onClick={handleCloseModal}>Cancel</button>
            <button className='px-5 py-3 bg-blue-600 active:bg-blue-700 rounded text-sm text-white' type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

type UpdateEventFormProps = {
  event: Event
  currentFile?: any
  handleFileChange: (event: any) => void
  resetFile: () => void
  updateModalState: any
  onSubmit: (eventId: string, attachmentFile: any) => Promise<boolean>
}

export default UpdateEventForm