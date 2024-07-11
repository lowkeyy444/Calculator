let num1 ='';
let num2 ='';
let operator;
let numCount = 0;
let numLimit = 15;
let first = false;

function add(num1,num2){
        return num1+num2;}
    
function sub(num1,num2){
        return num1-num2;}
        
function multiply(num1,num2){
        return num1*num2;}
    
      
function divide(num1,num2){
        return num1/num2;}
    
    
    

function operate(num1,operator,num2){
    num1 =parseFloat(num1);
    num2 = parseFloat(num2);
    if(operator==='+'){return add(num1,num2);}
    else  if(operator=='-'){return sub(num1,num2);}
    else if(operator=='×'){return multiply(num1,num2);}
    else if(operator=='÷'){return divide(num1,num2);}
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
            const display = document.querySelector(".main_display");
            const newNum = document.createElement("span");
            newNum.textContent = buttonValue;
            display.appendChild(newNum);
            numCount++; 

       if(first === false ){
        num1 = num1 +buttonValue;
       }else{
        num2 = num2+buttonValue;

       }

    }

    const subDisplay = document.querySelector(".sub_display")
    subDisplay.innerHTML += num2
}


     else if(buttonValue === '+' || buttonValue === '-' || buttonValue === '×' || buttonValue === '÷') {
        if (first === false) {
            first = true;
            operator = buttonValue;
            console.log(operator);
            const display=document.querySelector(".main_display");
            display.textContent="";

            const subDisplay = document.querySelector(".sub_display")
            let subtext = num1 + operator;
            subDisplay.textContent = subtext;



        }

}
    else if(buttonValue === '='){
        if(num1 && operator&&num2){
            const result = operate(num1,operator,num2);
            const display = document.querySelector(".main_display");
            display.textContent = result;
            num1 = result;
            num2 = '';
            operator=null;
            first=false;
            numCount=0;
          

        }
    }

    else if(buttonValue === 'AC'){
        const display = document.querySelector(".main_display");
        num1 = '';
        num2 = '';
        operator= null;
        display.textContent='';
        first=false
        numCount=0;

        const subDisplay = document.querySelector(".sub_display");
        subDisplay.textContent='';
        }

        else if (buttonValue === 'C'){
            const display = document.querySelector(".main_display")
            display.removeChild(display.lastElementChild);
            
        }

    
    });
    
});

// operate(num1,operator,num2);
// const subDisplay = document.querySelector(".sub_display");
// subDisplay.innerHTML=subvalue+"hello";