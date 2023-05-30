import { PODCAST_DATA } from "./config.js";
import { createHTMLElement } from "./functions.js";

export function podcastItem() {

    const podcastWrapper = createHTMLElement({ element: 'div', className: 'podcasts-wrapper'});
    

    PODCAST_DATA.forEach(data => {
        const podcastItem  = createHTMLElement({ element: 'div', className: 'podcast'});
        const podcastControls = createHTMLElement({ element: 'div', className: 'podcast-controls'});
        const podcastContent = createHTMLElement({ element: 'div', className: 'podcast-content'});

        const podcastImage = createHTMLElement({ element: 'img', className: 'podcast-image', src: data.image});
        const podcastLenght = createHTMLElement({ element: 'span', className: 'podcast-length', text: data.length});
        const podcastPlayButton = createHTMLElement({ element: 'button', className: 'podcast-play', text: data.buttonText });
        
        const podcastTitle = createHTMLElement({ element: 'h3', className: 'podcast-title', text: data.title });
        const podcastDate = createHTMLElement({ element: 'span', className: 'podcast-date', text: data.date });

        podcastControls.append(podcastImage, podcastLenght, podcastPlayButton);
        podcastContent.append(podcastTitle, podcastDate);
        podcastItem.append(podcastControls, podcastContent);
        
        podcastWrapper.append(podcastItem);
    });


    return podcastWrapper;
}