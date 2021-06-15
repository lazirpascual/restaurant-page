import { createNavBar } from './nav-bar'

export const createInitialPage = () => {
    const mainContainer = document.querySelector('#content');

    // create section for slogan
    const slogan = document.createElement('div');
    slogan.classList.add('slogan');
    slogan.textContent = "FRESH. FAST. TASTY";

    createNavBar();
    mainContainer.appendChild(slogan);
}

