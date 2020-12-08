const email = document.getElementById('email');
const username = document.getElementById('username');
const country = document.getElementById('country');

const emailFromLocal = localStorage.getItem('email');
const usernameFromLocal = localStorage.getItem('username');
const countryFromLocal = localStorage.getItem('country')

email.innerHTML = emailFromLocal;
username.innerHTML = usernameFromLocal;
country.innerHTML = countryFromLocal;

