const profileLink = document.getElementById("profileLink");
const profileLink2 = document.getElementById("profileLink2");

function viewProfile() {
    window.location = `/dist/profile/index.html?name=${localStorage.getItem("name")}`;
}

profileLink.addEventListener("click", viewProfile)
profileLink2.addEventListener("click", viewProfile)