document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('patientForm').addEventListener('submit', validateForm);
});

function validateForm(e) {
    e.preventDefault();
    let isValid = true;

    // Clear errors
    document.querySelectorAll('.error').forEach(span => span.textContent = '');
    document.querySelectorAll('input, select').forEach(el => el.classList.remove('invalid'));
    document.getElementById('successMessage').textContent = '';

    // Get values
    const fullName = document.getElementById('fullName').value.trim();
    const age = document.getElementById('age').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const insuranceProvider = document.getElementById('insuranceProvider').value;
    const policyNumber = document.getElementById('policyNumber').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    
    // Full Name: letters, spaces, hyphens only
    if (!/^[A-Za-z\s-]+$/.test(fullName) || fullName === '') {
        document.getElementById('fullNameError').textContent = 'Only letters, spaces and hyphens allowed.';
        document.getElementById('fullName').classList.add('invalid');
        isValid = false;
    }

    // Age
    if (age === '' || isNaN(age) || Number(age) < 18) {
        document.getElementById('ageError').textContent = 'Age must be 18 or older';
        document.getElementById('age').classList.add('invalid');
        isValid = false;
    }

    // Phone
    if (!/^\(\d{3}\)\s\d{3}-\d{4}$/.test(phone)) {
        document.getElementById('phoneError').textContent = 'Format must be (XXX) XXX-XXXX';
        document.getElementById('phone').classList.add('invalid');
        isValid = false;
    }

    // Email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('emailError').textContent = 'Enter a valid email address.';
        document.getElementById('email').classList.add('invalid');
        isValid = false;
    }
    
    // Insurance Provider
    if (!insuranceProvider) {
        document.getElementById('insuranceProviderError').textContent = 'Please select a provider.';
        document.getElementById('insuranceProvider').classList.add('invalid');
        isValid = false;
    }
	
    // Policy Number
    if (!/^[A-Za-z0-9]{10}$/.test(policyNumber)) {
        document.getElementById('policyNumberError').textContent = 'Must be alphanumeric are 10 characters long.';
        document.getElementById('policyNumber').classList.add('invalid');
        isValid = false;
    }

    //Username:
        // Username: >5 chars, any character
    if (username.length <= 5) {
        document.getElementById('usernameError').textContent = 'Username must be more than 5 characters.';
        document.getElementById('username').classList.add('invalid');
        isValid = false;
    }

    // Password: at least 8 chars, any character
    if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Min 8 chars, must include letter, number & symbol';
        document.getElementById('password').classList.add('invalid');
        isValid = false;
    }

    // Confirm Password:
    if (confirmPassword !== password || confirmPassword === '') {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        document.getElementById('confirmPassword').classList.add('invalid');
        isValid = false;
    }

    // Success
    if (isValid) {
        document.getElementById('patientForm').reset();
        document.getElementById('successMessage').textContent = 'Patient registered successfully!';
    }
    return false;
}