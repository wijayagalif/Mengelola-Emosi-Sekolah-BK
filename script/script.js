document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        themeToggle.classList.toggle('active');

        const sunIcon = themeToggle.querySelector('.fa-sun');
        const moonIcon = themeToggle.querySelector('.fa-moon');

        sunIcon.style.display = sunIcon.style.display === 'none' ? 'block' : 'none';
        moonIcon.style.display = moonIcon.style.display === 'none' ? 'block' : 'none';
    });
});
