export const createNavBar = () => {
    const mainContainer = document.querySelector('#content');
    const navBar = document.createElement('div');
    navBar.classList.add('nav-bar');

    // create three sections; home, menu, and about
    const home = document.createElement('div');
    home.textContent = "HOME";
    navBar.appendChild(home);
    const menu = document.createElement('div');
    menu.textContent = "MENU";
    navBar.appendChild(menu);
    const about = document.createElement('div');
    about.textContent = "ABOUT";
    navBar.appendChild(about);

    mainContainer.appendChild(navBar);
}