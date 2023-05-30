import { createEventItems } from "./event-item.js";
import { createHTMLElement, createTitle } from "./functions.js";

export function eventSection() {
    
    const eventsWrapper = createHTMLElement({ element: 'div', className: 'events-wrapper' });

    eventsWrapper.append(createTitle('Renginiai'), createEventItems());

    return eventsWrapper;
}