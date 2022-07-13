function createFrontPage (){

    let body = document.createElement("div");
    body.style.backgroundImage = "url('../img/main-page.jpg')"
    body.classList.add("body");

    let center = document.createElement("div");
    center.classList.add("center");
    center.textContent = "La Espanha";
    body.appendChild(center);
    
    // add center frontPage to content div
    let content = document.getElementById("content");
    //content.style.backgroundImage = "url('../img/main-page.jpg')"
    content.append(body);
        
}

export {createFrontPage};