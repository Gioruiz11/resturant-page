function createMenuPage(){
// create body under header
let menuBody = document.createElement("div");
menuBody.classList.add("menubody");

let menuHeader = document.createElement("h2");
menuHeader.textContent = "Menu";
menuHeader.classList.add("menuheader")

let menuBar = document.createElement("div");

let menuDiv = document.createElement("div");
let menuDivHeader = document.createElement("h5");
menuDivHeader.textContent = "Gazpacho";
let menuDivInfo = document.createElement("p");
menuDivInfo.textContent = `water, olive oil, vinegar, garlic, tomato, cucumber`;
menuDiv.append(menuDivHeader, menuDivInfo, );

let menuDiv2 = document.createElement("div");
let menuDivHeader2 = document.createElement("h5");
menuDivHeader2.textContent = "Papas Arrugadas";
let menuDivInfo2 = document.createElement("p");
menuDivInfo2.textContent = `potatoes, mojo`;
menuDiv2.append(menuDivHeader2, menuDivInfo2,);


menuBody.append(menuHeader, menuBar, menuDiv, menuDiv2);
let content = document.getElementById("content");
content.append(menuBody);
}

export {createMenuPage};