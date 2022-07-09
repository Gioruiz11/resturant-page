function createFrontPage (){

    let header = document.createElement("h1");
    let headerHomeLink = document.createElement("a");
    headerHomeLink.textContent = "Home";
    headerHomeLink.href = "./index.html";
    headerHomeLink.addEventListener("click",)
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

    let body = document.createElement("div");
    body.classList.add("body");

    let center = document.createElement("div");
    center.classList.add("center");
    center.textContent = "La Espanha";
    body.appendChild(center);

    let content = document.getElementById("content");
    content.style.backgroundImage = "url('../img/main-page.jpg')"
    content.append(header, body);
        
}

export {createFrontPage};