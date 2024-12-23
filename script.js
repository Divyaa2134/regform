$(document).ready(function() {
    $('#registrationForm').submit(function(e) {
        e.preventDefault(); // Prevent default form submission

        let formData = $(this).serialize(); // Get form data

        // Show success message with form data
        $('#result').fadeIn();
        $('#resultContent').html(`
            <div class="result-item"><strong>Full Name:</strong> ${$('#name').val()}</div>
            <div class="result-item"><strong>Email:</strong> ${$('#email').val()}</div>
            <div class="result-item"><strong>Phone Number:</strong> ${$('#phone').val()}</div>
            <div class="result-item"><strong>Date of Birth:</strong> ${$('#dob').val()}</div>
            <div class="result-item"><strong>Gender:</strong> ${$('#gender').val()}</div>
            <div class="result-item"><strong>Address:</strong> ${$('#address').val()}</div>
        `);

        // Clear the form
        $('#registrationForm')[0].reset();
    });
});
