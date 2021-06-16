import { createNavBar, clearContainer } from './nav-bar'
import { createMenuPage } from './menu'
import { createAboutPage } from './about'

export const createInitialPage = () => {
    // change home background
    const htmlContainer = document.querySelector('#html');
    htmlContainer.classList.remove('menu-background');
    htmlContainer.classList.remove('about-background');
    htmlContainer.classList.add('home-background');

    // create section for slogan
    const mainContainer = document.querySelector('#content');
    const slogan = document.createElement('div');
    slogan.classList.add('slogan');
    slogan.textContent = "FRESH. FAST. TASTY";

    createNavBar();
    mainContainer.appendChild(slogan);

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

