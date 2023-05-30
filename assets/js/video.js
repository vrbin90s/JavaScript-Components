import { createBigButton } from "./big-button.js";
import { createHTMLElement, createTitle, createYouTubeVideoElement } from "./functions.js";

export function videoSection() {
    const videoSectionWrapper = createHTMLElement({ element: 'div', className: 'video-section-wrapper' });
    
    const videoWrapper = createHTMLElement({ element: 'div', className: 'video-wrapper'});
    const videoExtraText = createHTMLElement({ element: 'span', className: 'video-extra-text', text: `Jei galiu aš – gali ir tu!`});
    
    videoWrapper.append(createYouTubeVideoElement('b8dGCsP75HA'));
    videoSectionWrapper.append(createTitle('Vaizdo įrašai'), videoWrapper, videoExtraText, createBigButton('Visi vaizdo įrašai', '#'));

    return videoSectionWrapper;

}