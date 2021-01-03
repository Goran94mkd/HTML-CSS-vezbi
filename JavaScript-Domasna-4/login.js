const email = document.getElementById('email')
const pw = document.getElementById('pw')
const btn = document.getElementById('btn')


btn.addEventListener('click', function() {
  if(email.value == localStorage.getItem('email') && pw.value == localStorage.getItem('password')){
    window.location = 'home-page.html'
  }if(email.value == ''){
    alert ('E-mail field cannot be empty');
  }if(pw.value == ''){
    alert ('Password field cannot be empty');
  }if(email.value != localStorage.getItem('email')){
    alert ('The e-mail you entered doesn`t belong to an account. Please check your e-mail and try again.');
  }if(pw.value != localStorage.getItem('password')){
    alert ('Password is incorrect!')
  }
}) 





