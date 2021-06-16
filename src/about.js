import { createNavBar } from './nav-bar'
import { addEventListeners } from './tab-switch'

export const createAboutPage = () => {
    // change about background
    const htmlContainer = document.querySelector('#html');
    htmlContainer.classList.remove('home-background');
    htmlContainer.classList.remove('menu-background');
    htmlContainer.classList.add('about-background');

    createNavBar();
    addEventListeners();
}