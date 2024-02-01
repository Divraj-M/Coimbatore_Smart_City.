function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var successMessage = document.getElementById('successMessage');
    var errorMessage = document.getElementById('errorMessage');

    // Simulated server-side validation
    if (password.length < 8 || !/[0-9]/.test(password) || !/[!@#$%^&*]/.test(password)) {
        successMessage.innerText = ''; // Clear the success message if validation fails
        errorMessage.innerText = 'Invalid password. Password must be at least 8 characters and contain at least one number and one special character.';
    } else {
        // Simulated login success
        successMessage.innerText = 'You are successfully logged in!';
        errorMessage.innerText = ''; // Clear the error message if login succeeds
    }
}
