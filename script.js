document.addEventListener('DOMContentLoaded', function() {
    const contactLink = document.getElementById('contact-link');
    const contactForm = document.getElementById('contact-form');

    contactLink.addEventListener('click', function(e) {
        e.preventDefault();
        contactForm.style.display = contactForm.style.display === 'none' ? 'block' : 'none';
    });
});