function getInputFieldValueById (inputFieldId){
 const inputField = document.getElementById(inputFieldId);
 const inputFieldValueString = inputField.value;
 const inputFieldValue = parseFloat(inputFieldValueString);
 inputField.value = '';
 return inputFieldValue;
}

function getTextElementValueById (elementId){
    const textElement = document.getElementById(elementId);
    const elementValue = textElement.innerText;
    const elementValueString = parseFloat(elementValue);
    return elementValueString;
}

function setTextElementValueById (elementId , newValue){
    const setTheValue = document.getElementById(elementId);
    setTheValue.innerText = newValue;
}