export function createPostPage(title, text, id, author, comment){
    const li = document.createElement("li");
    const commentLi = document.createElement("li");
    const titleDiv = document.createElement("div");
    const textDiv = document.createElement("div");
    const authorDiv = document.createElement("div");
    const commentDiv = document.createElement("div");
    const header = document.createElement("h1");
    const textBody = document.createElement("p");
    const commentHeader = document.createElement("h1");
    const commentTextBody = document.createElement("p");

    li.classList.add("li-post");
    titleDiv.classList.add("li-titleDiv");
    textDiv.classList.add("li-textDiv");
    commentLi.classList.add("li-comment");
    authorDiv.classList.add("li-titleDiv");
    commentDiv.classList.add("li-textDiv");
    header.classList.add("header");
    textBody.classList.add("text");
    commentHeader.classList.add("header");
    commentTextBody.classList.add("text");

    li.id = id;
    header.textContent = title;
    textBody.textContent = text;
    commentHeader.textContent = author;
    commentTextBody.textContent = comment;

    titleDiv.append(header);
    textDiv.append(textBody);
    li.append(titleDiv);
    li.append(textDiv);

    authorDiv.append(commentHeader);
    commentDiv.append(commentTextBody);
    commentLi.append(authorDiv);
    commentLi.append(commentDiv);
    return {li: li, commentLi: commentLi};
}
