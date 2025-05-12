// script.js
document.querySelectorAll('.destination-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.querySelector('img').style.transform = 'scale(1.05)';
    });

    card.addEventListener('mouseleave', function() {
        this.querySelector('img').style.transform = 'scale(1)';
    });
});