export function createListItem(title, text, id){
    const li = document.createElement("li");
    const titleDiv = document.createElement("div");
    const textDiv = document.createElement("div");
    li.classList.add("li");
    titleDiv.classList.add("li-titleDiv");
    textDiv.classList.add("li-textDiv");

    li.id = id;
    titleDiv.innerText = title;
    textDiv.innerText = text;
    li.append(titleDiv);
    li.append(textDiv);
    return li;
}
