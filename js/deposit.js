document.getElementById('deposit-btn').addEventListener("click" , function(){
    // DEPOSIT SECTION:-
    // value collect from deposit input field.
    const newDepositValue = getInputFieldValueById('deposit-field');
    // console.log(newDepositAmount);

    // previous Deposit Value collected
    const previousDepositValue = getTextElementValueById('deposit-amount');
    // console.log(previousDepositAmount);

    // calcluted privious + new deposit amount
    const newDepositAmount = previousDepositValue + newDepositValue;
    // console.log(newDepositAmount);

    // set the new deposit value.
    setTextElementValueById('deposit-amount' , newDepositAmount);

    // BALANCE SECTION:-
    // value collect from balance field.
    const previousBalanceAmount = getTextElementValueById('total-balance');

    // calcluted deposit + Balance amount
    const newBalanceAmount = previousBalanceAmount + newDepositAmount;

    // set the new balance to balance field.
    setTextElementValueById('total-balance' , newBalanceAmount);
})