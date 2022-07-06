function createSite (){
    let frontPageImage = document.createElement("img");
    let reserveButton = document.createElement("button");
    let resturantName = document.createElement("h1");
    let subtext = document.createElement("p");
    
    let content = document.getElementById("content");
    content.append(frontPageImage, reserveButton, resturantName, 
        subtext);    
}

export {createSite};