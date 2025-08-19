// script.js

// Interactive button click
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function () {
        alert(`You clicked on "${this.textContent}"`);
    });
});

// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Logo animation
const logo = document.querySelector('.logo img');
logo.addEventListener('mouseover', () => {
    logo.style.transform = 'scale(1.1)';
    logo.style.transition = 'transform 0.3s ease';
});
logo.addEventListener('mouseout', () => {
    logo.style.transform = 'scale(1)';
});
