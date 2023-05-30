import { createBigButton } from "./big-button.js";
import { createHTMLElement, createTitle } from "./functions.js";
import { mainNews } from "./main-news.js";
import { secondaryNews } from "./secondary-news.js";

export function newsContent(data){
    const newsWrapper = createHTMLElement({ element: 'div', className: 'news-wrapper'});

    newsWrapper.append(createTitle('Naujienos'), mainNews(), secondaryNews(), createBigButton('Visos naujienos', '#'));

    return newsWrapper;

}