const hamburgerButton = document.getElementById("hamburger");
const hamburgerMenu = document.getElementById("hamburgerMenu");
const closeButton = document.getElementById("close");



function showMenu() {
    hamburgerMenu.style.display = "block";
    closeButton.style.display = "block";
    hamburgerButton.style.display = "none";
}

function closeMenu() {
    hamburgerMenu.style.display = "none";
    closeButton.style.display = "none";
    hamburgerButton.style.display = "block";
}



hamburgerButton.addEventListener("click", showMenu);

closeButton.addEventListener("click", closeMenu);