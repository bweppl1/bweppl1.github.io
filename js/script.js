// Example: Toggle contact section visibility
document.getElementById('toggleContact').addEventListener('click', function() {
    const contactSection = document.getElementById('contact');
    if (contactSection.style.display === 'none') {
        contactSection.style.display = 'block';
    } else {
        contactSection.style.display = 'none';
    }
});