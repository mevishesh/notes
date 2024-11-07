const notesContainer = document.querySelector(".notes_container");
const createBtn = document.querySelector(".create");
const deleteAllBtn = document.querySelector(".delete-all");
let notes = document.querySelectorAll(".input_box");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || "";
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input_box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "icons8-delete-100.png";
    img.className = "delete";
    img.style.cursor = "pointer";
    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);
    updateStorage();
});

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
});

notesContainer.addEventListener("input", function (e) {
    if (e.target.classList.contains("input_box")) {
        updateStorage();
    }
});

deleteAllBtn.addEventListener("click", () => {
    notesContainer.innerHTML = "";  
    localStorage.removeItem("notes");  
});
