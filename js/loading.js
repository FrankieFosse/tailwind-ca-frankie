const loadFunction = async () => {
    const myVideo = document.getElementById("myVideo");
    const loader = document.getElementById("loader");
    window.addEventListener("load", () => {
        loader.classList.add("hidden");
    });
    setTimeout(() => {
        myVideo.style.opacity = "100";
    }, 500);
}

loadFunction();

