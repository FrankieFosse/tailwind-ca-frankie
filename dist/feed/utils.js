export let collection = [];

export const out = document.querySelector("div#output");
const outResults = document.querySelector("div#outputResults");

export const listPostTemplate = (post) => {
    return `<a href="details.html?id=${post.id}" class="bg-gray-700 bg-opacity-50 hover:bg-gray-500 hover:scale-105 duration-150 text-center w-4/5 sm:w-full h-72 md:h-80 rounded">
            <div id="postElement" class="flex flex-col justify-center items-center">
            <h1 class="text-gray-100 w-4/5 overflow-hidden my-2">${post.title.slice(0, 18)}</h1>
            <img class="h-48 w-4/5 object-cover" id="postImage" src=${post.media?.url ? post.media?.url : "../../images/image-placeholder-500x500.jpg"}>
            </div>
            </a>`;
}

export function listData(list, out) {
    out.innerHTML = "";
    let output = "";
    for (let item of list) {
        output += `${listPostTemplate(item)}`
    }
    if (output) {
        out.innerHTML = output;
        outResults.style.display = "none";
    } else {
        outResults.style.display = "flex";
    }
}