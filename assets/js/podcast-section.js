import { createHTMLElement, createTitle } from "./functions.js";
import { podcastItem } from "./podcast-item.js";

export function podcastSection() {

    const podcastWrapper = createHTMLElement({ element: 'div', className: 'podcasts-wrapper', });

    podcastWrapper.append(createTitle('Podcastai'), podcastItem());
  
    return podcastWrapper;

}