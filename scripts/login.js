'use strict';

const containerLogin = document.getElementById('container-login');
const containerSignup = document.getElementById('container-signup');

const btnSignup = document.getElementById('btnSignup');
const btnLogin = document.getElementById('btnLogin');

btnSignup.addEventListener('click', function (e) {
    e.preventDefault();
    containerLogin.style.display = "none";
    containerSignup.style.display = "block";
})

btnLogin.addEventListener('click', function (e) {
    e.preventDefault();
    containerSignup.style.display = "none";
    containerLogin.style.display = "block";
})