import {listData, collection, out} from "./utils.js";

let api = `https://v2.api.noroff.dev/social/posts/`

async function fetchPosts() {
    try {
        const response = await fetch(api, {
            method: "GET",
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "X-Noroff-API-Key": `178dd2f7-0bd8-4d9b-9ff9-78d8d5ac9bc9`
            }  
        })
        if (!response.ok) {
            throw new Error("Could not fetch data");
        };
        const responseData = await response.json();

        for (let item of responseData.data) {
            collection.push(item);
        }

        const latestTwelvePosts = responseData.data.slice(0, 12);

        listData(latestTwelvePosts, out);

        const queryString = document.getElementById("searchField");
        queryString.addEventListener("input", filterPosts);

        const sortSelect = document.getElementById("type");
sortSelect.addEventListener("change", sortPosts);

function sortPosts() {
    const sortValue = sortSelect.value;
    let sorted = [...collection]; // Clone collection to avoid mutating the original

    if (sortValue === "latest") {
        sorted.sort((a, b) => new Date(b.created) - new Date(a.created));
    } else if (sortValue === "title") {
        sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortValue === "profile") {
        sorted.sort((a, b) => a.author.name.localeCompare(b.author.name));
    }

    // Optionally apply filter as well if search is active
    const filterQuery = queryString.value;
    if (filterQuery) {
        sorted = sorted.filter((item) =>
            item.title.toUpperCase().includes(filterQuery.toUpperCase())
        );
    }

    listData(sorted.slice(0, 12), out);
}


    function filterPosts() {
    const filterQuery = queryString.value;

    if(filterQuery) {
        const filtered = collection.filter((item)=>{
            return item.title.toUpperCase().indexOf(filterQuery.toUpperCase()) > -1;
        });

    listData (filtered, output);
    } else {
        const latestTwelvePosts = responseData.data.slice(0, 12);
        listData (latestTwelvePosts, output);
        }
    };

    } catch(error) {
        console.error(error);
    }
}

fetchPosts();

