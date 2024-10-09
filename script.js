// Script for basic interactivity
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
    
    links.forEach(link => {
        link.addEventListener('mouseover', function() {
            link.style.color = '#ffd700';
        });

        link.addEventListener('mouseout', function() {
            link.style.color = '#f8c291';
        });
    });
});
