import { createNavBar, clearContainer } from './nav-bar'
import { createInitialPage } from './home'
import { createMenuPage } from './menu'

export const createAboutPage = () => {
    // change home background
    const htmlContainer = document.querySelector('#html');
    htmlContainer.classList.remove('home-background');
    htmlContainer.classList.remove('menu-background');
    htmlContainer.classList.add('about-background');

    createNavBar();

    const mainContainer = document.querySelector('#content');
    // switch to home page on button click
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