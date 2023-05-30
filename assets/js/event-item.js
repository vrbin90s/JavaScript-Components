import { EVENT_DATA } from "./config.js";
import { createHTMLElement } from "./functions.js";

export function createEventItems() {
    const eventList = createHTMLElement({ element: 'div', className: 'events-list' });

    EVENT_DATA.forEach(event => {

        const eventElement = createHTMLElement({ element: 'div', className: 'event' });
        const eventLink = createHTMLElement({ element: 'a', url: '#'});
        
        const eventContent = createHTMLElement({ element: 'div', className: 'event-content'});
        
        const eventDate = createHTMLElement({ element: 'div', className: 'event-date'});
        const eventDay = createHTMLElement({ element: 'span', className: 'event-day', text: event.day});
        const eventMonth = createHTMLElement({ element: 'span', className: 'event-month', text: event.month});
        
        const eventInfo = createHTMLElement({ element: 'div', className: 'event-info'});
        const eventLocation = createHTMLElement({ element: 'span', className: 'event', text: event.location });
        eventLocation.classList.add('location');
        const eventTitle = createHTMLElement({ element: 'h3', className: 'event-title', text: event.title });

        eventDate.append(eventDay, eventMonth);
        eventInfo.append(eventLocation, eventTitle);

        if(event.image) {
            const eventImageWrapper = createHTMLElement({ element: 'div', className: 'image-wrapper'});;
            const eventImage = createHTMLElement({ element: 'img', className: 'event-image', src: event.image });
            eventImageWrapper.append(eventImage);
            eventLink.append(eventImageWrapper);
        }
        
        eventContent.append(eventDate, eventInfo);
        eventElement.append(eventLink);
        eventLink.append(eventContent);
        eventList.append(eventElement);

    });
   

    return eventList;

}