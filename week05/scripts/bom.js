const input = document.querySelector("#favchap");
const button = document.querySelector("#addchap");
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function setChapterList() {
    localStorage.setItem("favBOMChapters", JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("favBOMChapters"));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item != chapter);
    setChapterList();
}

function displayList(item) {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    li.textContent = item;
    deleteButton.textContent = "❌";
    deleteButton.classList.add("delete");
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener("click", function() {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

button.addEventListener("click", function() {
    if (input.value.trim() != "") {
        displayList(input.value.trim());
        chaptersArray.push(input.value.trim());
        setChapterList();
    }
    input.value = "";
    input.focus();
});