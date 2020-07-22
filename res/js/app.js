var navMenuVisible = false, navMenu = document.getElementsByClassName("nav-menu")[0];

function toggleNavMenu() {
    navMenu.style.right = navMenuVisible ? "-151.86px" : "25px";
    navMenuVisible = !navMenuVisible;
}
