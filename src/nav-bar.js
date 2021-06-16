export const createNavBar = () => {
    const mainContainer = document.querySelector('#content');
    const navBar = document.createElement('div');
    navBar.classList.add('nav-bar');

    // create three sections; home, menu, and about
    const home = document.createElement('div');
    home.textContent = "HOME";
    home.id = 'home-id';
    navBar.appendChild(home);
    const menu = document.createElement('div');
    menu.textContent = "MENU";
    menu.id = 'menu-id';
    navBar.appendChild(menu);
    const about = document.createElement('div');
    about.textContent = "ABOUT";
    about.id = 'about-id';
    navBar.appendChild(about);

    mainContainer.appendChild(navBar);
}

export const clearContainer = parent => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};