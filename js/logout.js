const ifLoggedIn = () => {
    const logOutButton = document.getElementById("logout");
    const logOutButton2 = document.getElementById("logout2");

    let token = localStorage.getItem("token");
    let email = localStorage.getItem("email");

    if (token && email) {
        console.log("Logged in");
        logOutButton.addEventListener("click", () => {
            localStorage.removeItem("token");
            localStorage.removeItem("email");
            localStorage.removeItem("name");
            window.location = "/dist/index.html";
        });
    } else {
        console.log("Not logged in");
    }
    if (token && email) {
        logOutButton2.addEventListener("click", () => {
            localStorage.removeItem("token");
            localStorage.removeItem("email");
            localStorage.removeItem("name");
            window.location = "/dist/index.html";
        });
    }
}

window.addEventListener("load", ifLoggedIn);