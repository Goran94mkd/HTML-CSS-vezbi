const email = document.getElementById('email')
const username = document.getElementById('username')
const country = document.getElementById('country')
const pw = document.getElementById('pw')
const pw2 = document.getElementById('pw2')
const btn = document.getElementById('btn')
const error = document.getElementById('error')

const check = function(email, pw, pw2){
  if(pw.value != ''){
    if(email.value !='' && username.value != '' && country.value != '' && pw.value === pw2.value ){
      return true;
    } 
  }else{
    return 'Password field cannot be empty';
  }
  if(email.value == ''){
    return 'E-mail field cannot be empty';
	}
	if(username.value == ''){
		return 'Username field cannot be empty';
	}
	if(country.value == ''){
		return 'Country field cannot be empty'
	}
	if(pw2.value == ''){
		return 'Retype your password!'
	}
  if(pw.value != pw2.value){
    return 'Password did not match';
  }
};

const saveValue = function(){
	let forms = check(email, pw, pw2);

	if(typeof(forms) == 'boolean'){
		localStorage.setItem('email', email.value);
		localStorage.setItem('password', pw.value);
		localStorage.setItem('username', username.value);
		localStorage.setItem('country', country.value);
	  window.location = 'login-page.html'
	}else{
		error.innerHTML = forms
	}
};

btn.addEventListener('click', function() {
	if(localStorage.getItem('email') != null) {
		if(localStorage.getItem('email') == email.value){
			alert("User already exists");
		}else{
			saveValue();
		}
	}else{
		saveValue();
	}
});