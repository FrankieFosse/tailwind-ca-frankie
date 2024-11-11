let outElement = document.getElementById("detailedPost");
let postStatus = document.getElementById("postStatus");

let params = new URL (document.location).searchParams;

let id = params.get("id");
const url = `https://v2.api.noroff.dev/social/posts/${id}?_author=true`;

async function getPostById() {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "X-Noroff-API-Key": `178dd2f7-0bd8-4d9b-9ff9-78d8d5ac9bc9`
            }
        });
        const responseData = await response.json();
        console.log(responseData);
        document.title = responseData.data.title + " - Social Media App";
        listDetailedPost(responseData, outElement);
    } catch(error) {
        console.error(error);
    }
}

getPostById();

function listDetailedPost(post, out) {
    let newDiv = `
    <div class="text-gray-100 bg-gray-900 flex flex-col h-4/5 lg:w-3/5 xl:w-2/5 w-4/5 text-center items-center justify-center content-center mt-16 overflow-hidden">
    <p class="w-4/5 mt-5">Made by <a class="bg-blue-600 saturate-50 rounded-full px-2 hover:bg-blue-400 duration-150" href="/dist/profile/index.html?name=${post.data.author.name}">${post.data.author.name}</a></p>
    <h1 class="h-4/5 w-4/5 mb-3 mt-10 mx-10">${post.data.title}</h1>
    <img src=${post.data.media?.url ? post.data.media?.url : "/../images/image-placeholder-500x500.jpg"} class="w-2/5">
    <p class="h-4/5 w-auto pb-16 pt-4 mx-10">${post.data.body}</p>
    </div>
    `;
    out.innerHTML = newDiv;
}