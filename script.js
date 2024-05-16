document.querySelector('.theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
});


// script.js

document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        const navBarHeight = document.querySelector('.nav').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navBarHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});
