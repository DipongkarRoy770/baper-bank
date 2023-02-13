 //1step :btn niya kaj korci
 document.getElementById('withdraw').addEventListener('click',function(){
  //2step :input niya kaj korbo
  const input = document.getElementById('withdraw-input');
  const newInput = input.value ;
  const newInputuser = parseFloat(newInput)
  //7step:valu faka kora;
  input.value = '' ;
  //3step: withdraw : withdraw manu k id diye dorci 
  const withdrawUser = document.getElementById('withdraw-user')
  const newWithdraw = withdrawUser.innerText ;
  const newWithdraws  = parseFloat(newWithdraw)
  //4step:taarpor previousBalance & newBalance sum korte hbe
  const withdrawBalance = newInputuser + newWithdraws ;
  
 
  // if(withdrawBalance>totalWithdraw){
  //   alert('amr kase tk nai')
  // }
  //5step:withdraw balance theke mainass korte hbe :
  const balance = document.getElementById('balance');
  const newBalance = balance.innerText ;
  const userBalance = parseFloat(newBalance);
  //6step:total theke withdraw amound bad dite hbe.
  const totalWithdraw = userBalance-withdrawBalance ;
  
  //akta condition diye kaj korte hbe
  if(withdrawBalance>totalWithdraw){
    
    alert('amr kase  nai')
  return 
  }
  withdrawUser.innerText = withdrawBalance ;
  balance.innerText = totalWithdraw ;
 })