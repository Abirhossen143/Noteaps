// function openNotes() {
//   document.querySelector(".input_box").style.display = "none";
//   const inputBox = document.querySelector(".input_box");
// }
const notesContainer = document.querySelector(".notescontainer");
const creatBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input_box");
function getStorage() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
getStorage();
function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

creatBtn.addEventListener("click", () => {
  let inputbox = document.createElement("p");
  let img = document.createElement("img");
  inputbox.className = "input_box";
  inputbox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  notesContainer.appendChild(inputbox).appendChild(img);
});
notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input_box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage();
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
