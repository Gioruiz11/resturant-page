function createContactPage (){

    let contact = document.createElement("div");
    contact.classList.add("contact");
    let contactHeader = document.createElement("h4");
    contactHeader.textContent = "La Espanha Contact Information";
    let contactInfo = document.createElement("p");
    contactInfo.textContent = "For general inquiries, please contact example@laespanha.com";
    contactInfo.textContent = "For press or media inquiries, please contact example@laespanha.com";
    contactInfo.textContent = "Phone: (317)-784-1458";
    contact.append(contactHeader, contactInfo);


    let address = document.createElement("div");
    address.classList.add("address");
    let addressHeader = document.createElement("h4");
    addressHeader.textContent = "Address";
    let addressInfo = document.createElement("p");
    addressInfo.textContent = "123 Seville Ave \n Andalusia, Espania";



    let hours = document.createElement("div");
    hours.classList.add("hours");
    let hoursHeader = document.createElement("h4");
    hoursHeader.textContent = "Hours of Operation";
    

}

export {createContactPage};