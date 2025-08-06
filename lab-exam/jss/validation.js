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