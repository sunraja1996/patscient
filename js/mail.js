// Mail

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let subject = document.getElementById("subject").value;
    let organization = document.getElementById("organization").value;
    let message = document.getElementById("message").value;

    // Construct the Gmail URL
    let gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=patscient@gmail.com&su=${encodeURIComponent(subject)}&body=Full Name: ${encodeURIComponent(fullname)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0APhone: ${encodeURIComponent(phone)}%0D%0ACompany/Organization: ${encodeURIComponent(organization)}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;

    // Open Gmail in a new tab
    window.open(gmailLink, '_blank');

    let popup = document.getElementById("popup");
    popup.classList.add("show");

    setTimeout(function() {
        popup.classList.remove("show");
    }, 3000);
});



// Handle the consultant form
document.getElementById("consult-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get values from the form fields inside the consult form
    let fullname = document.querySelector("#consult-form #fullname").value;
    let email = document.querySelector("#consult-form #email").value;
    let phone = document.querySelector("#consult-form #phone").value;
    let subject = document.querySelector("#consult-form #subject").value;
    let organization = document.querySelector("#consult-form #organization").value;
    let message = document.querySelector("#consult-form #message").value;


    let mailtoLink = `mailto:mail@gmail.com?subject=${encodeURIComponent(subject)}&body=Full Name: ${encodeURIComponent(fullname)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0APhone: ${encodeURIComponent(phone)}%0D%0ACompany/Organization: ${encodeURIComponent(organization)}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;

    window.open(mailtoLink, '_blank');

    showPopup("Mail sent successfully. Our team will get back to you.");
});

// Function to show the popup message
function showPopup(message) {

    let popup = document.getElementById("popup");
    document.getElementById("popup-message").innerText = message;
    popup.classList.add("show");

    setTimeout(function() {
        popup.classList.remove("show");
    }, 3000);
}
