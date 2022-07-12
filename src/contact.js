function createContactPage (){
    // main body that goes under header
    let contactBody = document.createElement("div");
    contactBody.classList.add("contactbody");


    let contactDiv = document.createElement("div");
    contactDiv.classList.add("contact");

    let contactHeader = document.createElement("h4");
    contactHeader.textContent = "La Espanha Contact Information";

    let contactInfo = document.createElement("p");
    contactInfo.innerHTML = `For general inquiries, please contact example@laespanha.com <br>
    For press or media inquiries, please contact example@laespanha.com <br> 
    Phone: (317)-784-1458`;
    contactDiv.append(contactHeader, contactInfo);


    let addressDiv = document.createElement("div");
    addressDiv.classList.add("address");

    let addressHeader = document.createElement("h4");
    addressHeader.textContent = "Address";

    let addressInfo = document.createElement("p");
    addressInfo.innerHTML = "123 Seville Ave <br> Andalusia, Espania";
    addressDiv.append(addressHeader, addressInfo);


    let hoursDiv = document.createElement("div");
    hoursDiv.classList.add("hours");
    let hoursHeader = document.createElement("h4");
    hoursHeader.textContent = "Hours of Operation";
    let hoursBody = document.createElement("p");
    hoursBody.innerHTML = `<b>Dinner</b> <br> 
    Sunday - Thursday | 5:00pm - 9:30pm <br>
    Friday - Saturday | 6:00pm - 10:00pm <br>
    <b>Happy Hour</b> <br>
    Monday - Friday | 5:00pm - 6:00pm`;
    hoursDiv.append(hoursHeader, hoursBody);

    contactBody.append(contactDiv, addressDiv, hoursDiv);
    let content = document.getElementById("content");
    content.append(contactBody);
    

}

export {createContactPage};