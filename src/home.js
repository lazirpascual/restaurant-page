import { createNavBar } from './nav-bar'

export const createInitialPage = () => {
    // change home background
    const htmlContainer = document.querySelector('#html');
    htmlContainer.classList.add('home-background');

    // create section for slogan
    const mainContainer = document.querySelector('#content');
    const slogan = document.createElement('div');
    slogan.classList.add('slogan');
    slogan.textContent = "FRESH. FAST. TASTY";

    createNavBar();
    mainContainer.appendChild(slogan);
}

