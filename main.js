document.getElementById('deposite-btn').addEventListener('click',function(){
  //input niya kaj koreci
  const input = document.getElementById('input-value');
  const inputValue = input.value ;
  const userInput = parseFloat(inputValue)
  //deposite id niya kaj korte hbe
  const userDepositeElement = document.getElementById('user-deposite')
  const previousdeposite = userDepositeElement.innerText;
  const depositeTotals =parseFloat(previousdeposite)
  const currentDepositeTotal =userInput + depositeTotals ;
  userDepositeElement.innerText = currentDepositeTotal ;
  //balance:
  const balance= document.getElementById('balance');
  const newBalance = balance.innerText ;
  const newBalanceTotal = parseFloat(newBalance);
  const totalBalance = currentDepositeTotal + newBalanceTotal
  balance.innerText =totalBalance ;
  //input clear :
  input.value ='' ;
})