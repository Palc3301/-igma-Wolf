const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (!validateLoginForm(email, password)) {
        return;
    }

    redirectToIndex();
});

signupForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('signup-email').value;
    const name = document.getElementById('signup-name').value;
    const password = document.getElementById('signup-password').value;

    if (!validateSignupForm(email, name, password)) {
        return;
    }
    redirectToIndex();
});

function validateLoginForm(email, password) {
    if (email.trim() === '' || password.trim() === '') {
        displayError('login', 'Please enter both email/CPF and password.');
        return false;
    }

    return true;
}

function validateSignupForm(email, name, password) {
    if (email.trim() === '' || name.trim() === '' || password.trim() === '') {
        displayError('signup', 'Please enter all required fields.');
        return false;
    }

    return true;
}

function redirectToIndex() {
    window.location.href = 'index.html';
}

function displayError(formType, message) {
    const errorElement = document.getElementById(`${formType}-error`);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}
