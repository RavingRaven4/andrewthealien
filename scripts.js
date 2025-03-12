// Get the button and the contact info section
const contactButton = document.getElementById('contactButton');
const contactInfo = document.getElementById('contactInfo');

// Add event listener for the button
contactButton.addEventListener('click', () => {
    // Toggle visibility of the contact info
    if (contactInfo.style.display === 'none') {
        contactInfo.style.display = 'block';
        contactButton.textContent = 'Hide Contact Info';
    } else {
        contactInfo.style.display = 'none';
        contactButton.textContent = 'Click to Reveal Contact Info';
    }
});
