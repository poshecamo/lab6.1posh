// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Select the input fields and button
    const contactName = document.getElementById('contact_name');
    const contactEmail = document.getElementById('contact_email');
    const contactPhone = document.getElementById('contact_phone');
    const contactMessage = document.getElementById('contact_message');
    const button = document.querySelector('button[type="submit"]');

    // Add event listener to the button
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the form from submitting immediately

        // Validate name
        if (contactName.value.trim() === "") {
            alert('Name is a mandatory field');
        } else if (contactName.value.trim().length < 5) {
            alert('Name: Minimum 5 characters.');
        } else {
            // Validate email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(contactEmail.value.trim())) {
                alert('Please enter a valid email address.');
            } else {
                // Validate phone
                const phonePattern = /^[0-9]+$/;
                if (!phonePattern.test(contactPhone.value.trim())) {
                    alert('Phone number must contain only numbers.');
                } else {
                    // Validate message
                    if (contactMessage.value.trim().length < 5) {
                        alert('Message: Minimum 5 characters.');
                    } else {
                        // If all validations pass, you can submit the form here
                        alert('Form is valid!');
                        // Uncomment the line below to actually submit the form
                        // document.querySelector('form').submit();
                    }
                }
            }
        }
    });
});
