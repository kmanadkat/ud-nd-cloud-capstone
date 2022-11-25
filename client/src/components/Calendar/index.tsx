import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import './styles.scss'

const Calendar = ({events, onEventClick, onDateClick}: CalendarProps) => {
  return (
    <div className='p-12 rounded-lg bg-white shadow'>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin]}
        initialView='dayGridMonth'
        initialDate={new Date()}
        select={onDateClick}
        eventClick={onEventClick}
        headerToolbar={{
          left: 'prev,next',
          center: 'title',
          right: 'dayGridMonth,listMonth',
        }}
        views={{
          dayGridMonth: { buttonText: 'Month' },
          timeGridWeek: { buttonText: 'Week' },
          timeGridDay: { buttonText: 'Day' },
          listMonth: { buttonText: 'List' },
        }}
        height={640}
        contentHeight={700}
        aspectRatio={3}
        events={events}
        selectable={true}
      />
    </div>
  )
}

type CalendarProps = {
  events: {title: string, start?: string, end?: string}[],
  onEventClick: (eventArgs: any) => void,
  onDateClick: (dateArgs: any) => void
}

export default Calendar
