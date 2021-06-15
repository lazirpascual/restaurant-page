import { createInitialPage } from './home'

const mainContainer = document.querySelector('#content');
createInitialPage();

// switch to homepage on button click
const homePage = document.querySelector('#home-id');
homePage.addEventListener('click', function(e) {
    mainContainer.innerHTML = "";
    createInitialPage();
});