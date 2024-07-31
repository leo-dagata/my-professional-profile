document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });
        document.querySelector(this.getAttribute('href')).style.display = 'block';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    document.querySelector('#home').style.display = 'block';
});
