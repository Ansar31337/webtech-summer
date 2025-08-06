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

    // Age: must be 18 or older
    if (age === '' || isNaN(age) || Number(age) < 18) {
        document.getElementById('ageError').textContent = 'Age must be 18 or older';
        document.getElementById('age').classList.add('invalid');
        isValid = false;
    }

    // Phone: (XXX) XXX-XXXX
    if (!/^\(\d{3}\)\s\d{3}-\d{4}$/.test(phone)) {
        document.getElementById('phoneError').textContent = 'Format must be (XXX) XXX-XXXX';
        document.getElementById('phone').classList.add('invalid');
        isValid = false;
    }