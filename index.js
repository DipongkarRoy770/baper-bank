document.getElementById('btn').addEventListener('click',function(){
  const userEmail = document.getElementById('user-mail');
  const userEmailLogin = userEmail.value;
  const userPassword = document.getElementById('user-password');
  const passwordSet = userPassword.value;
  console.log(userEmailLogin,passwordSet)
})