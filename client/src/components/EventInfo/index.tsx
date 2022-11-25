import EmptyState from '../../assets/empty.png'
import CalendarIcon from '../../assets/calendar.svg'
import LocationIcon from '../../assets/location.svg'
import { Event } from '../../types/Event'
import './styles.scss'
import { parseDateTimeString } from '../../utils'

const EventInfo = ({ event, onDelete }: EventProps) => {
  return (
    <div className="event-details w-full h-full p-10 rounded-lg bg-white shadow">
      <h2 className="text-xl font-semibold">Event Details</h2>
      {event &&
        <>
          <div className="event-info mt-12">
            <h3 className='title text-lg font-semibold'>{event.title}</h3>
            {event.description && <p className='description text-gray-500'>{event.description}</p>}
            <p className='start font-semibold'>Starts <span className='pl-1 font-normal text-gray-500'>{parseDateTimeString(event.start)}</span></p>
            <p className='end font-semibold'>Ends <span className='pl-1 font-normal text-gray-500'>{parseDateTimeString(event.end)}</span></p>
            <p className='location text-gray-500'>{event.location}</p>

            <img className='titleIcon pt-1' src={CalendarIcon} alt="Calendar Icon" />
            <div className='startIcon mt-1 ml-1 bg-green-600 h-4 w-4 rounded-full'></div>
            <div className='endIcon mt-1 ml-1 bg-red-600 h-4 w-4 rounded-full'></div>
            <img className='locationIcon' src={LocationIcon} alt="Location Icon" />
          </div>
          {event.attachmentUrl && <img className='max-h-[240px] rounded-lg' src={event.attachmentUrl} alt={`${event.title} location`} />}
          <div className='event-footer flex mt-10 gap-4'>
            <button 
              className='px-4 py-2 text-blue-600 hover:bg-blue-50 transition-all active:bg-blue-100 rounded'
              onClick={() => onDelete(event.id)} >Edit
            </button>
            <button 
              className='px-4 py-2 text-red-600 hover:bg-red-50 transition-all active:bg-red-100 rounded'
              onClick={() => onDelete(event.id)} >Delete
            </button>
          </div>
        </>}
      {!event && <div className='empty-event flex flex-col items-center justify-center h-full'>
        <img src={EmptyState} className="h-[240px]" alt="Empty State" />
        <p className='py-12 text-gray-500'>Select event to view details</p>
      </div>}
    </div>
  )
}

type EventProps = {
  event: null | Event
  onDelete: (eventId: string) => void
}

export default EventInfo