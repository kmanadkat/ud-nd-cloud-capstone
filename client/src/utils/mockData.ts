import { Event } from "../types/Event";

export const mockData: {eventsData: Event[], userName: string} = {
  eventsData: [
    {
      eventId: '1',
      userId: '',
      title: 'Office Reunion',
      description: 'Work from home ends & office resumes',
      start: '2022-11-12',
      end: '2022-11-12',
      location: 'Bengaluru, IBC Knowledge Park',
      attachmentUrl: 'https://propmedia1.propertyshare.in/website/property/NlNSVjFwQUdNR3pzQkF1ZGJ3Q0krdz09/media-v2/images/main/665x400/1578665089-ibc-knowledge-park-bangalore-1.jpg'
    },
    {
      eventId: '2',
      userId: '',
      title: 'Club Meeting',
      description: 'Discussion on purchase of new GYM equipments',
      start: '2022-11-25T17:00:02.712Z',
      end: '2022-11-25T18:00:02.712Z',
      location: 'Guest house dinning room',
      attachmentUrl: ''
    }
  ],
  userName: "Krupesh Anadkat"
}