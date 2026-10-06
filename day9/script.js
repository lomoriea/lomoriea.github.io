const form = document.getElementById("checklist-form");
const input = document.getElementById("item-input");
const checklist = document.getElementById("checklist");

form.addEventListener("submit", function (event) {
event.preventDefault();

const itemText = input.value.trim();

if (itemText !== "") {
const listItem = document.createElement("li");

listItem.textContent = itemText;

checklist.appendChild(listItem);

input.value = "";
input.focus();

}
});