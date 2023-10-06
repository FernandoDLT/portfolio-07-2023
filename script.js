const form = document.querySelector('form');
const box = document.querySelector('.box');
const emailInput = document.getElementById('emailInput');

emailInput.addEventListener('input', function() {
    if (emailInput.value.trim() !== '') {
        emailInput.classList.add('has-value');
    } else {
        emailInput.classList.remove('has-value');
    }
});

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = form.querySelector('input[type="text"]').value;
    const email = emailInput.value;

    if (username && email) {
        form.style.display = 'none';
        box.style.animation = 'none';
        box.style.background = 'linear-gradient(350deg, #3ba0ff, #002b8f)';

        const message = document.createElement('h4');
        message.innerText = 'Your email has been sent!';

        box.classList.add('show-message');
        box.appendChild(message);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const navBar = document.querySelector('.nav-bar');
    let lastScrollTop = 0;

    if (navBar) {
        window.addEventListener('scroll', () => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScrollTop <= 0) {
                // At the top of the page, hide the navigation menu
                navBar.style.top = '-60px';
            } else {
                // Scrolling down or up, show the navigation menu
                navBar.style.top = '0';
            }

            lastScrollTop = currentScrollTop;
        });
    }
});
