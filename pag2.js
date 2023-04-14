//Validação
const registrationForm = document.querySelector('.cadastro form');

registrationForm.addEventListener('submit', function(event) {
  const emailInput = registrationForm.querySelector('input[type="email"]');
  const nameInput = registrationForm.querySelector('input[type="text"]');
  const passwordInput = registrationForm.querySelector('input[type="password"]');
  let isValid = true;

  if (!emailInput.value) {
    alert('Please enter your email/CPF');
    isValid = false;
  }

  if (!nameInput.value) {
    alert('Please enter your name');
    isValid = false;
  }

  if (!passwordInput.value || passwordInput.value.length < 8) {
    alert('Please enter a password with at least 8 characters');
    isValid = false;
  }

  if (!isValid) {
    event.preventDefault();
  }
});

// medir senha
const passwordInput = document.querySelector('input[type="password"]');
const strengthIndicator = document.querySelector('.strength-indicator');

passwordInput.addEventListener('input', function() {
  const password = passwordInput.value;
  let strength = '';

  if (password.length < 6) {
    strength = 'Weak';
  } else if (password.length < 10) {
    strength = 'Medium';
  } else {
    strength = 'Strong';
  }

  strengthIndicator.textContent = `Password Strength: ${strength}`;
});



