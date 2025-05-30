const button = document.getElementById('button');
const input = document.getElementById('input');
button.addEventListener('click', function () {
  button.textContent = input.value;
});