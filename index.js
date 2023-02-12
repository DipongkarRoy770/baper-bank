document.getElementById('btn').addEventListener('click',function(){
  const userEmail = document.getElementById('user-mail');
  const userEmailLogin = userEmail.value;
  const userPassword = document.getElementById('user-password');
  const passwordSet = userPassword.value;
  if(userEmailLogin==='dipongkarroy233@gmail.com' && passwordSet==='secret'){
    window.location.href = 'http://127.0.0.1:5500/main.html'

  }
  else{
    alert('password vule geso,baper taka tulte parbe na.')
  }
})