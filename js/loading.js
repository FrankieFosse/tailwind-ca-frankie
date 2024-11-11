const loadFunction = async () => {
    const myVideo = document.getElementById("myVideo");
    const loader = document.getElementById("loader");
    window.addEventListener("load", () => {
        loader.classList.add("hidden");
    });
    setTimeout(() => {
        myVideo.classList.add("brightness-100");
        myVideo.classList.remove("grayscale");
    }, 500);
}

loadFunction();

