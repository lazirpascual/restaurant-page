import { createNavBar } from './nav-bar'
import { addEventListeners } from './tab-switch'

export const createMenuPage = () => {
    // change menu background
    const htmlContainer = document.querySelector('#html');
    htmlContainer.classList.remove('home-background');
    htmlContainer.classList.remove('about-background');
    htmlContainer.classList.add('menu-background');

    const mainContainer = document.querySelector('#content');
    const menu = document.createElement('div');
    menu.classList.add('menu-style');

    createNavBar();
    mainContainer.appendChild(menu);
    addEventListeners();
}