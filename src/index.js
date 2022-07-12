import { createFrontPage } from './mainpage.js';
import { createContactPage } from './contact.js';
import { createMenuPage } from './menu.js';

function createHeader(){
    let header = document.createElement("h1");
    let headerHomeLink = document.createElement("a");
    headerHomeLink.textContent = "Home";
    headerHomeLink.href = "./index.html";
    let headerMenuLink = document.createElement("a");
    headerMenuLink.textContent = "Menu";
    headerMenuLink.href = "./index.html";
    let headerContactLink = document.createElement("a");
    headerContactLink.textContent = "Contact";
    headerContactLink.href = "./index.html";
    let headerReservationLink = document.createElement("a");
    headerReservationLink.textContent = "Reservation";
    headerReservationLink.href = "./index.html";

    // add 4 new elements as children to h1
    header.append(headerHomeLink, headerMenuLink, headerContactLink, 
        headerReservationLink);

    // add header to content div
    let content = document.getElementById("content");
    content.append(header);
}

createHeader();
//createFrontPage();
//createMenuPage();
createContactPage();