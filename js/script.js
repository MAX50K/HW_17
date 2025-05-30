const textInput = document.getElementById('textInput');
const changeButton = document.getElementById('changeButton');
changeButton.addEventListener('click', () => {
  changeButton.textContent = textInput.value;
}); 
// 2
