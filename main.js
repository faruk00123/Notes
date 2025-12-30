const ClickBtn = document.querySelector("#clickBtn");
const NotesContainer = document.querySelector(".notes-container");

function showNotes() {
  NotesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

const updateElementsa = () => {
  localStorage.setItem("notes", NotesContainer.innerHTML);
};
ClickBtn.addEventListener("click", () => {
  const CreatePTag = document.createElement("p");
  CreatePTag.className = "input-box";
  CreatePTag.contentEditable = "true";
  NotesContainer.appendChild(CreatePTag);
  const CreateImgTag = document.createElement("img");
  CreateImgTag.src = "images/delete.png";
  CreatePTag.appendChild(CreateImgTag);
});
NotesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateElementsa();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((item) => {
      item.onkeyup = function () {
        updateElementsa();
      };
    });
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    document.execCommand("insertLineBreak");
    e.preventDefault();
  }
});
