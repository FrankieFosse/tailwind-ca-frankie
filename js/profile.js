const profileLink = document.getElementById("profileLink");

function viewProfile() {
    window.location = `/dist/profile/index.html?name=${localStorage.getItem("name")}`;
}

profileLink.addEventListener("click", viewProfile)