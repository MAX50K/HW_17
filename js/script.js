const textInput = document.getElementById("textInput");
const changeButton = document.getElementById("changeButton");
changeButton.addEventListener("click", () => {
  changeButton.textContent = textInput.value;
}); 
// 2
const image = document.getElementById("image");
image.src = "../nice_cat.png";
// 3
const link = document.getElementById("link");
const img = document.getElementById("linkImage");

link.href = "https://google.com";
img.alt = "Це логотип Google";
// 4
const list = document.getElementById("list");
const firstItem = list.querySelector("li");
firstItem.textContent = "Lirli Larila";
