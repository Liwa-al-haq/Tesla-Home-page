import "./Header";
import "./Header.css";


window.onload=function(){const openMenu = () => {
  document.querySelector(".backdrop").className = "backdrop active";
  document.querySelector("aside").className = "active";
};
const closeMenu = () => {
  document.querySelector(".backdrop").className = "backdrop";
  document.querySelector("aside").className = "";
};

document.getElementById("menu").onclick = (e) => {
  console.log(document.getElementById("menu"));
  e.preventDefault();
  openMenu();
};
document.querySelector("aside button.close").onclick = (e) => {
  closeMenu();
};
document.querySelector(".backdrop").onclick = (e) => {
  closeMenu();
};
}

// console.log("Entered menu.js");
