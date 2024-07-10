let num1;
let num2;
let operator;

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
btn.forEach(function(btns) {
    btns.addEventListener("click", () => {
    buttonValue = btns.innerText;
      console.log(buttonValue);
        

            if(buttonValue ==='2'){
                console.log("asdasd")
            }
    });
    
});
