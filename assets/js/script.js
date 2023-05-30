import { NEWS_DATA } from "./config.js";
import { createHTMLElement } from "./functions.js";
import { newsContent } from "./news.js";
import { createSidebar } from "./sidebar.js";
import { videoSection } from "./video.js";

function init(){
    const mainContentElement = document.querySelector('#container');
    
    const contentWrapper =  createHTMLElement({ element: 'div', className: 'content-wrapper' });
    const mainElement = createHTMLElement({ element: 'main', className: 'main-content'});

    mainElement.append(newsContent(NEWS_DATA), videoSection());
    contentWrapper.append(mainElement, createSidebar());
    
    mainContentElement.append(contentWrapper);
}

init();