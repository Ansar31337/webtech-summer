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