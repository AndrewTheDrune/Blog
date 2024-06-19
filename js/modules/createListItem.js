export function createListItem(title, text, id){
    const li = document.createElement("li");
    const titleDiv = document.createElement("div");
    const textDiv = document.createElement("div");
    const header = document.createElement("h1");
    const textBody = document.createElement("p");
    
    li.classList.add("li");
    titleDiv.classList.add("li-titleDiv");
    textDiv.classList.add("li-textDiv");
    header.classList.add("header");
    textBody.classList.add("text");

    li.id = id;
    header.textContent = title;
    textBody.textContent = text;
    
    titleDiv.append(header);
    textDiv.append(textBody);
    li.append(titleDiv);
    li.append(textDiv);
    return li;
}
