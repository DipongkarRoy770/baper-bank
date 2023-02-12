 document.getElementById('withdraw').addEventListener('click',function(){
  //input niya kaj korbo
  const input = document.getElementById('withdraw-input');
  const newInput = input.value ;
  const newInputuser = parseFloat(newInput)
  //withdraw :
  const withdrawUser = document.getElementById('withdraw-user')
  const newWithdraw = withdrawUser.innerText ;
  const newWithdraws  = parseFloat(newWithdraw)
  const withdrawBalance = newInputuser + newWithdraws ;
  withdrawUser.innerText = withdrawBalance ;
  //withdraw balance theke mainass korte hbe :
  const balance = document.getElementById('balance');
  const newBalance = balance.innerText ;
  const userBalance = parseFloat(newBalance);
  const totalWithdraw = userBalance-withdrawBalance ;
  balance.innerText = totalWithdraw ;
  //valu faka kora;
  input.value = '' ;

 })