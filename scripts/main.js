/*
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/clothes.webp") {
    myImage.setAttribute("src", "images/flores.jpg");
  } else {
    myImage.setAttribute("src", "images/clothes.webp");
  }
};
*/
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Ponga su nombre.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `${myName} sos un animal`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Bienvenido, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};
