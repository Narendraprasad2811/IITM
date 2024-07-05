document.addEventListener('DOMContentLoaded', function() {
    const membershipForm = document.getElementById('membership-form');

    // Add event listener to the membership form
    membershipForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get user input
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        // Show alert with user details
        alert(`Thank you, ${name}! Your membership request has been received.`);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const contactButton = document.getElementById('contact-button');
    const contactInfo = document.getElementById('contact-info');

    // Add event listener to the contact button
    contactButton.addEventListener('click', function() {
        // Toggle the visibility of the contact info footer
        contactInfo.classList.toggle('visible');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        const slides = document.getElementsByClassName("slide");
        for (let i = 0; i  slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
});