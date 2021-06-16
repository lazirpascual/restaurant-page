import { createInitialPage } from './home'
import { createMenuPage } from './menu'
import { createAboutPage } from './about'

const clearContainer = parent => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

export const addEventListeners = () => {
    // switch to home page on button click
    const mainContainer = document.querySelector('#content');
    const homePage = document.querySelector('#home-id');
    homePage.addEventListener('click', function(e) {
        clearContainer(mainContainer);
        createInitialPage();
    });

    // switch to menu page on button click
    const menuPage = document.querySelector('#menu-id');
    menuPage.addEventListener('click', function(e) {
        clearContainer(mainContainer);
        createMenuPage();
    });

    // switch to about page on button click
    const aboutPage = document.querySelector('#about-id');
    aboutPage.addEventListener('click', function(e) {
        clearContainer(mainContainer);
        createAboutPage();
    });
}
