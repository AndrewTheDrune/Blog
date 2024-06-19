import { fetchGETPage } from "./modules/fetchGET.js";
import { fetchGETPost } from "./modules/fetchGET.js";
import { createListItem } from "./modules/createListItem.js";

const ul = document.querySelector("ul");
const pageNumber = document.querySelector("#current-page");
const lastButton = document.querySelector("#last");
const firstButton = document.querySelector("#first");
const nextButton = document.querySelector("#next");
const previousButton = document.querySelector("#previous");

let pagination;

async function displayPosts(page = 1){
    pagination = (await fetchGETPage(page)).pagination;
    pageNumber.innerHTML = pagination.page;

    const result = await fetchGETPage(page);
    console.log(pagination);

    if (pagination.links.previous === null) {
        previousButton.disabled = true;
        firstButton.disabled = true;
    }
    if (pagination.links.next === null) {
        nextButton.disabled = true;
        lastButton.disabled = true;
    }
    
    for (let post = result.posts.length - 1; post >= 0; post--){
        const li = createListItem(result.posts[post].title, result.posts[post].body, result.posts[post].id);
        li.addEventListener("click", async (event) => {
            if (event.target != li) {
                const id = await fetchGETPost(event.target.parentNode.id);
                location.href = `/html/blogPage.html?id=${id[0].id}`;
            }
            else{
                const id = await fetchGETPost(event.target.id);  
                location.href = `/html/blogPage.html?id=${id[0].id}`;
            }
        });
        ul.append(li);
    }
}

displayPosts(location.search.split("=")[1]);  

firstButton.addEventListener("click", async(e) => {        
    location.href = `/html/blogList.html?page=${1}`;
});
previousButton.addEventListener("click", async(e) => {        
    location.href = `/html/blogList.html?page=${pagination.links.previous.split("=")[1]}`;
});
nextButton.addEventListener("click", async() => {
    location.href = `/html/blogList.html?page=${pagination.links.next.split("=")[1]}`;
});
lastButton.addEventListener("click", async(e) => {        
    location.href = `/html/blogList.html?page=${pagination.pages}`;
});
