export function createHTMLElement(options){

    const { element, text, className, url, append, src } = options;

    const newDomElement = document.createElement(element);

    if(text) {
        newDomElement.textContent = text;
    }

    if(className) {
        newDomElement.classList.add(className);
    }

    if (url) {
        newDomElement.href = url;
    }

    if (append) {
        newDomElement.append(append);
    }
    if(src) {
        newDomElement.src = src;
    }

   return newDomElement;

}

export function createYouTubeVideoElement(videoId, width, height) {
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    iframe.width = width;
    iframe.height = height;
    iframe.allowFullscreen = true;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
  
    return iframe;
}

export function createTitle(title) {
    const sectionTitle = createHTMLElement({ element: 'h2', className: 'section-title', text: title});
    
    return sectionTitle;
} 