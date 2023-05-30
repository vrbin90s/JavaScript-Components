import { NEWS_DATA } from "./config.js";
import { createHTMLElement } from "./functions.js";

export function newsItem() {

    const newsItems = [];

    NEWS_DATA.forEach(data => {
        const newsItem = createHTMLElement({ element: 'div', className: 'news-item' });
        const link = createHTMLElement({ element: 'a', url: '#' });
        const imageWrapper = createHTMLElement({ element: 'div', className: 'image-wrapper' });
        const newsContent = createHTMLElement({ element: 'div', className: 'news-content' });

        const image = createHTMLElement({ element: 'img', src: data.image });
        const newsCategory = createHTMLElement({ element: 'span', className: 'news-category', text: data.category });
        const newsTitle = createHTMLElement({ element: 'h3', className: 'news-title', text: data.title });
        const newsDate = createHTMLElement({ element: 'span', className: 'news-date', text: data.date });

        imageWrapper.append(image);
        newsContent.append(newsCategory, newsTitle, newsDate);
        link.append(imageWrapper, newsContent);
        newsItem.append(link);
        newsItems.push(newsItem);
    });

    return newsItems;
}