document.addEventListener("DOMContentLoaded", function() {
    var contactForm = document.getElementById('contact-form');
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        var name = nameInput.value.trim();
        var email = emailInput.value.trim();
        var message = messageInput.value.trim();

        if (name === '' || email === '' || message === '') {
            displayMessage('error', 'Please fill in all fields');
            highlightEmptyFields();
            return;
        }

        if (!isValidEmail(email)) {
            displayMessage('error', 'Please enter a valid email address');
            emailInput.style.borderColor = '#FF0000';
            emailInput.focus();
            return;
        }

        if (getMessageWordCount(message) > 50) {
            displayMessage('error', 'Message length should not exceed 50 words');
            messageInput.style.borderColor = '#FF0000';
            messageInput.focus();
            return;
        }

        displayMessage('success', 'Your message has been sent successfully!');
        contactForm.reset();
    });

    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function displayMessage(type, message) {
        var formMessage = document.getElementById('form-message');
        formMessage.textContent = message;
        formMessage.className = 'form-message ' + type;
        formMessage.style.backgroundColor = type == "success" ? "#009e00" : "#FF0000";
    
        setTimeout(function() {
            formMessage.style.backgroundColor = "";
            formMessage.textContent = "";
        }, 4000);
    }

    function highlightEmptyFields() {
        if (nameInput.value.trim() === '') {
            nameInput.style.borderColor = '#FF0000';
        } else {
            nameInput.style.borderColor = '';
        }
        if (emailInput.value.trim() === '') {
            emailInput.style.borderColor = '#FF0000';
        } else {
            emailInput.style.borderColor = '';
        }
        if (messageInput.value.trim() === '') {
            messageInput.style.borderColor = '#FF0000';
        } else {
            messageInput.style.borderColor = '';
        }
    }

    function getMessageWordCount(message) {
        return message.split(/\s+/).length;
    }
});
