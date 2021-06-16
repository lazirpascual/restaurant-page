import { createNavBar } from './nav-bar'
import { addEventListeners } from './tab-switch'

export const createAboutPage = () => {
    // change about background
    const htmlContainer = document.querySelector('#html');
    htmlContainer.classList.remove('home-background');
    htmlContainer.classList.remove('menu-background');
    htmlContainer.classList.add('about-background');

    // create section for restaurant info
    const mainContainer = document.querySelector('#content');
    const restaurantInfo = document.createElement('div');
    restaurantInfo.classList.add('restaurant-info');

    //create three sections in restaurant info, location, hours, and contact
    const location = document.createElement('div');
    location.textContent = "Location";
    const street = document.createElement('div');
    street.classList.add('info-box');
    street.textContent = "82 King Street, Kitchener, ON";
    location.appendChild(street);
    restaurantInfo.appendChild(location);

    const hours = document.createElement('div');
    hours.textContent = "Hours";
    const availability = document.createElement('div');
    availability.classList.add('info-box');
    availability.textContent = "Mon - Sat, 10am - 9pm";
    hours.appendChild(availability);
    restaurantInfo.appendChild(hours);

    const contact = document.createElement('div');
    contact.textContent = "Contact";
    const email = document.createElement('div');
    email.classList.add('info-box');
    email.textContent = "dyneforfree@hotmail.ca";
    contact.appendChild(email);
    restaurantInfo.appendChild(contact);

    createNavBar();
    mainContainer.appendChild(restaurantInfo);
    addEventListeners();
}