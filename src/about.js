import { createNavBar } from './nav-bar'

export const createAboutPage = () => {
    // change home background
    const htmlContainer = document.querySelector('#html');
    htmlContainer.classList.remove('home-background');
    htmlContainer.classList.remove('menu-background');
    htmlContainer.classList.add('about-background');

    createNavBar();
}