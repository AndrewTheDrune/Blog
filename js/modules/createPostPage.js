export function createPostPage(title, text, id, author, comment){
    const li = document.createElement("li");
    const commentLi = document.createElement("li");
    const titleDiv = document.createElement("div");
    const textDiv = document.createElement("div");
    const authorDiv = document.createElement("div");
    const commentDiv = document.createElement("div");
    li.classList.add("li");
    titleDiv.classList.add("li-titleDiv");
    textDiv.classList.add("li-textDiv");
    commentLi.classList.add("li");
    authorDiv.classList.add("li-titleDiv");
    commentDiv.classList.add("li-textDiv");

    li.id = id;
    titleDiv.innerText = title;
    textDiv.innerText = text;
    authorDiv.innerText = author;
    commentDiv.innerText = comment;
    li.append(titleDiv);
    li.append(textDiv);
    commentLi.append(authorDiv);
    commentLi.append(commentDiv);
    return {li: li, commentLi: commentLi};
}
