//#region DOM elements
const navBar = document.querySelector("nav.bar"), navBarMenu = navBar.querySelectorAll("li"), navBarToggle = navBar.querySelector(".toggle");
//#endregion

//#region State management
let navBarMenuVisible = false;

function setNavBarMenuVisibility(visible) {
	navBarMenuVisible = visible;

	navBarMenu.forEach(option => { if (option !== navBarMenu.item(0)) option.style.height = navBarMenuVisible ? "1.25rem" : "0"; });
}
//#endregion

//#region Event listeners
window.addEventListener("scroll", () => { navBar.classList.toggle("scrolled", window.scrollY > 0); });

navBarToggle.onclick = () => { setNavBarMenuVisibility(!navBarMenuVisible); };
navBarMenu.forEach(option => { option.onclick = () => { setNavBarMenuVisibility(false); }; });
//#endregion
