import { createNavBar } from './nav-bar'

export const createMenuPage = () => {
    // change home background
    const htmlContainer = document.querySelector('#html');
    htmlContainer.classList.remove('home-background');
    htmlContainer.classList.remove('about-background');
    htmlContainer.classList.add('menu-background');

    createNavBar();
}