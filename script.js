document.addEventListener('DOMContentLoaded', function() {
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const signUpForm = document.querySelector('.form-container.sign-up form');
const signInForm = document.querySelector('.form-container.sign-in form');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

signUpForm.addEventListener('submit', function(event) {
    if (!validateSignUpForm()) {
        event.preventDefault();
    }
});

signInForm.addEventListener('submit', function(event) {
    if (!validateSignInForm()) {
        event.preventDefault();
    }
});

function validateSignUpForm() {
    const name = signUpForm.querySelector('input[type="text"]').value;
    const email = signUpForm.querySelector('input[type="email"]').value;
    const password = signUpForm.querySelector('input[type="password"]').value;

    if (name === '' || email === '' || password === '') {
        alert('Please fill in all the fields.');
        return false;
    }

    if (!isValidName(name)) {
        alert('Please enter a valid name.');
        return false;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (!isValidPassword(password)) {
        alert('Please enter a valid password. \nIt should be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.');
        return false;
    }

    return true;
}

function validateSignInForm() {
    const email = signInForm.querySelector('input[type="email"]').value;
    const password = signInForm.querySelector('input[type="password"]').value;

    if (email === '' || password === '') {
        alert('Please fill in all the fields.');
        return false;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    if (!isValidPassword(password)) {
        alert('Please enter a valid password. It should be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.');
        return false;
    }


    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}


function isValidPassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}

function isValidName(name) {
    const nameRegex = /^[A-Za-z\s\-',.]+$/;
    return nameRegex.test(name);
}




});