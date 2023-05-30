import { createBigButton } from "./big-button.js";
import { eventSection } from "./events-section.js";
import { createHTMLElement } from "./functions.js";
import { podcastSection } from "./podcast-section.js";

export function createSidebar(){
    const sidebarContent = createHTMLElement({ element: 'aside', className: 'sidebar-content' });
    const podcastWrapper = createHTMLElement({ element: 'div', className: 'podcast-wrapper' });
    const eventsWrapper = createHTMLElement({ element: 'div', className: 'events-wrapper' });
    
    podcastWrapper.append(podcastSection());
    eventsWrapper.append(eventSection());
    sidebarContent.append(podcastWrapper, eventsWrapper, createBigButton('Daugiau', '#'));
    
    
    return sidebarContent;
}