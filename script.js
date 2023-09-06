const form = document.querySelector('form');
const box = document.querySelector('.box');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  const username = form.querySelector('input[type="text"]').value;
  const password = form.querySelector('input[type="password"]').value;

  if (username && password) {
    form.style.display = 'none';
    box.style.animation = 'none';
    box.style.background = 'linear-gradient(350deg, #3ba0ff, #002b8f)';

    const message = document.createElement('h4');
    message.innerText = 'Your email has been sent!';

    box.classList.add('show-message');
    box.appendChild(message);
  }
});