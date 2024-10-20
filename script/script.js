document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const toggleButton = document.querySelector('.toggle-button');
    const navbar = document.querySelector('nav ul')
    const sunIcon = themeToggle.querySelector('.fa-sun');
    const moonIcon = themeToggle.querySelector('.fa-moon');

    // Event listener untuk tema
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        themeToggle.classList.toggle('active');

        sunIcon.style.display = sunIcon.style.display === 'none' ? 'block' : 'none';
        moonIcon.style.display = moonIcon.style.display === 'none' ? 'block' : 'none';
    });

    // Event listener untuk toggle navbar
    toggleButton.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
});
