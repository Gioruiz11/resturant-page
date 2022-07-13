import { createFrontPage } from './mainpage.js';
import { createContactPage } from './contact.js';
import { createMenuPage } from './menu.js';
import { createReservationPage } from './reservation.js';

function createHeader(){
    let header = document.createElement("h1");
    let headerHomeLink = document.createElement("a");
    headerHomeLink.textContent = "Home";
    headerHomeLink.addEventListener("click", function() {removeDOM(1)});

    let headerMenuLink = document.createElement("a");
    headerMenuLink.textContent = "Menu";
    headerMenuLink.addEventListener("click", function() {removeDOM(2)});

    let headerContactLink = document.createElement("a");
    headerContactLink.textContent = "Contact";
    headerContactLink.addEventListener("click", function() {removeDOM(3)});

    let headerReservationLink = document.createElement("a");
    headerReservationLink.textContent = "Reservation";
    headerReservationLink.addEventListener("click", function(){removeDOM(4)});

    // add 4 new elements as children to h1
    header.append(headerHomeLink, headerMenuLink, headerContactLink, 
        headerReservationLink);

    // add header to content div
    let content = document.getElementById("content");
    content.append(header);

}

function removeDOM(a){
    let content = document.getElementById("content");
    let toDelete = content.childNodes[2];
    content.removeChild(toDelete);
    if(a === 1){
        createFrontPage();
    }
    if(a === 2){
        createMenuPage();
    }
    if(a === 3){
        createContactPage();
    }
    if(a === 4){
        createReservationPage();
    }
}

createHeader();
createFrontPage();