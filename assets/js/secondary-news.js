import { createHTMLElement } from "./functions.js";
import { newsItem } from "./news-item.js";

export function secondaryNews() {

    const secondaryNewsElement = createHTMLElement({ element: 'div', className: 'secondary-news'});
    const newsCards = newsItem().slice(2);
    newsCards.forEach(item => {
        secondaryNewsElement.append(item);
    })

    return secondaryNewsElement;
}