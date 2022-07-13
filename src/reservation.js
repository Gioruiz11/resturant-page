function createReservationPage (){

    let body = document.createElement("div");
    body.classList.add("reservationbody");

    let center = document.createElement("div");
    center.textContent = "La Espanha";
    
    let subtext = document.createElement("div");
    subtext.textContent = "Coming Soon"

    body.append(center, subtext);
    let content = document.getElementById("content");
    content.append(body);
        
}

export {createReservationPage};

