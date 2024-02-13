//#region DOM elements
const navBar = document.querySelector("nav.bar");
//#endregion

//#region Event listeners
window.addEventListener("scroll", () => { navBar.classList.toggle("scrolled", window.scrollY > 0); });
//#endregion
