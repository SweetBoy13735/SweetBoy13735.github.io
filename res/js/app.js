// DOM Elements
const navBar = document.querySelector("nav.bar"), navBarMenu = navBar.querySelectorAll("li"), navBarMenuToggle = navBar.querySelector("button");

// State management
let navBarMenuVisible = false;

function setNavBarMenuVisible(visible) {
	navBarMenuVisible = visible;

	navBarMenu.forEach(option => { if (option !== navBarMenu.item(0)) option.style.height = navBarMenuVisible ? "1.25rem" : "0"; });
}

// Event listeners
window.addEventListener("scroll", () => { navBar.classList.toggle("scrolled", window.scrollY > 0); });

navBarMenu.forEach(option => { option.onclick = () => { setNavBarMenuVisible(false); }; });

navBarMenuToggle.onclick = () => { setNavBarMenuVisible(!navBarMenuVisible); };
