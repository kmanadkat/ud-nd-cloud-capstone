import { Event } from "../types/Event";

export const mockData: {eventsData: Event[], userName: string} = {
  eventsData: [
    {
      id: '1',
      title: 'Office Reunion',
      description: 'Work from home ends & office resumes',
      start: '2022-11-12',
      end: '2022-11-12',
      location: 'Bengaluru, IBC Knowledge Park',
      attachmentUrl: 'https://propmedia1.propertyshare.in/website/property/NlNSVjFwQUdNR3pzQkF1ZGJ3Q0krdz09/media-v2/images/main/665x400/1578665089-ibc-knowledge-park-bangalore-1.jpg'
    },
    {
      id: '2',
      title: 'Club Meeting',
      description: 'Discussion on purchase of new GYM equipments',
      start: '2022-11-25T17:00:02.712Z',
      end: '2022-11-25T18:00:02.712Z',
      location: 'Guest house dinning room',
      attachmentUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/124665007.jpg?k=217730d5cb5ef28852766a09d90ea1ec9af78102385fe31914117dab8fe632b4&o=&hp=1'
    }
  ],
  userName: "Krupesh Anadkat"
}