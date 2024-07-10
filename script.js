let num1;
let num2;
let operator;
let numCount = 0;
let numLimit = 15;

function add(num1,num2){
        return num1+num2;}
    
function sub(num1,num2){
        return num1-num2;}
        
function multiply(num1,num2){
        return num1*num2;}
    
      
function divide(num1,num2){
        return num1/num2;}
    
    
    

function operate(num1,operator,num2){
    if(operator==='+'){return add(num1,num2);}
    else  if(operator=='-'){return sub(num1,num2);}
    else if(operator=='*'){return multiply(num1,num2);}
    else if(operator=='/'){return divide(num1,num2);}
}

const btn = document.querySelectorAll("button");
let buttonValue;
var reg = /^-?\d+\.?\d*$/;

btn.forEach(function(btns) {
    btns.addEventListener("click", () => {
    buttonValue = btns.innerText;
    //   console.log(buttonValue);
   
      if(reg.test(buttonValue)){
        if(numCount<=numLimit){
       const display = document.querySelector(".display");
        const newNum = document.createElement("span");
        newNum.textContent = buttonValue;
       display.appendChild(newNum);
       numCount++; 
        }
     if (buttonValue === '+') {
        operator = "+";
        num1 = newNum.value;
        console.log(num1);
    } else if (buttonValue === '-') {
        operator = "-";
        num1 = newNum.value;
        console.log(num1);
    } else if (buttonValue === '×') {
        operator = "×";
        num1 = newNum.value;
        console.log(num1);
    } else if (buttonValue === '÷') {
        operator = "÷";
        num1 = newNum.value;
        console.log(num1);
    }

}   
    });
    
});

operate(num1,operator,num2);
