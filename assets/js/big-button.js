import { createHTMLElement } from "./functions.js";

export function createBigButton(buttonText, buttonUrl) {
    const button = createHTMLElement({element: 'a', className: 'button-large', url: buttonUrl, text: buttonText});

    return button;
}