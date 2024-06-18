import { fetchGETPage } from "./modules/fetchGET.js";
import { fetchGETPost } from "./modules/fetchGET.js";
import { fetchGETComments } from "./modules/fetchGET.js";
import { createPostPage } from "./modules/createPostPage.js";

const ul = document.querySelector("ul");

async function displayPost() {
    const result = await fetchGETPost(location.search.split("=")[1]);
    const comments = await fetchGETComments(location.search.split("=")[1]);
    console.log(comments);
    const post = createPostPage(result[0].title, result[0].body, result[0].id, comments[0].name, comments[0].body);
    ul.append(post.li);
    ul.append(post.commentLi);
}

displayPost();
