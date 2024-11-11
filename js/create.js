const createButton = document.getElementById("newPostButton");
const postOverlay = document.getElementById("newPostOverlay");
const cancelButton = document.getElementById("cancelCreate");
const cancelButton2 = document.getElementById("cancelCreate2");

function openOverlay() {
    postOverlay.style.display = "block";
}

function closeOverlay() {
    postOverlay.style.display = "none";
    postTitle.value = "";
    postBody.value = "";
    postTags.value = "";
    postMediaURL.value = "";
    postMediaALT.value = "";
    postStatus.innerHTML = "";
}

createButton.addEventListener("click", openOverlay);
cancelButton.addEventListener("click", closeOverlay);
cancelButton2.addEventListener("click", closeOverlay);



// Crate new Post function

const postTitle = document.getElementById("title");
const postBody = document.getElementById("body");
const postTags = document.getElementById("tags");
const postMediaURL = document.getElementById("mediaURL");
const postMediaALT = document.getElementById("mediaALT");
const postStatus = document.getElementById("postStatus");



async function createPost() {
    try {
        const response = await fetch(`https://v2.api.noroff.dev/social/posts`, {
            method: "POST",
            body: JSON.stringify({
                title: postTitle.value,
                body: postBody.value,
                media: {
                    url: postMediaURL.value,
                    alt: postMediaALT.value
                }
            }),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "X-Noroff-API-Key": `178dd2f7-0bd8-4d9b-9ff9-78d8d5ac9bc9`
            }
        })
        const responseData = await response.json();
        console.log(responseData);

        if(response.ok) {
            postStatus.innerHTML = "Post created"
        }
        else {
            postStatus.innerHTML = "Something went wrong.<br> All required fields must be filled out.<br> Media-URL must be a valid URL."
        }

    } catch(error) {
        console.error(error);
    }
}

const createPostButton = document.getElementById("createPostButton");

createPostButton.addEventListener("click", createPost);