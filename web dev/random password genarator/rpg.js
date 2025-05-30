const passwordDisplay = document.getElementById('password-display');
const lengthSlider = document.getElementById('length');
const lengthValueSpan = document.getElementById('length-value');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const generateBtn = document.getElementById('generate');
const copyBtn = document.getElementById('copy-btn');

const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

// Update length value display
lengthSlider.addEventListener('input', () => {
    lengthValueSpan.innerText = lengthSlider.value;
});

// Generate password on button click
generateBtn.addEventListener('click', generatePassword);

// Copy password to clipboard
copyBtn.addEventListener('click', () => {
    const password = passwordDisplay.innerText;
    if (!password) return;

    navigator.clipboard.writeText(password)
        .then(() => {
            alert('Password copied to clipboard!');
        })
        .catch(err => {
            console.error('Failed to copy password: ', err);
        });
});

function generatePassword() {
    let generatedPassword = '';
    const length = lengthSlider.value;
    let allowedChars = '';

    if (uppercaseCheckbox.checked) {
        allowedChars += uppercaseChars;
    }
    if (lowercaseCheckbox.checked) {
        allowedChars += lowercaseChars;
    }
    if (numbersCheckbox.checked) {
        allowedChars += numberChars;
    }
    if (symbolsCheckbox.checked) {
        allowedChars += symbolChars;
    }

    if (allowedChars === '') {
        passwordDisplay.innerText = 'Select at least one character type!';
        return;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        generatedPassword += allowedChars[randomIndex];
    }

    passwordDisplay.innerText = generatedPassword;
}

// Initial password generation on load
generatePassword();