import { createHTMLElement } from "./functions.js";
import { newsItem } from "./news-item.js";

export function mainNews() {

    const mainNewsElement = createHTMLElement({ element: 'div', className: 'main-news'});
    mainNewsElement.append(newsItem()[0], newsItem()[1]);
    return mainNewsElement;
}