document.getElementById('withdraw-btn').addEventListener("click" , function(){
    // WITHDRAW SECTION:-   
    const newWithdrawitValue = getInputFieldValueById('withdraw-field');
    const previousWithdrawValue = getTextElementValueById('withdraw-total');
    const newWithdrawAmount = previousWithdrawValue + newWithdrawitValue;
    setTextElementValueById('withdraw-total' , newWithdrawAmount);

    // BALANCE SECTION:-
    const previousBalanceAmount = getTextElementValueById('total-balance');
    const newBalanceAmount = previousBalanceAmount - newWithdrawAmount;
    setTextElementValueById('total-balance' , newBalanceAmount);
})