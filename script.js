let num1 ='';
let num2 ='';
let operator;
let numCount = 0;
let numLimit = 15;
let first = false;
let subtext;
let latestText;
let num_percen;
let result_percen;

function add(num1,num2){
        return num1+num2;}
    
function sub(num1,num2){
        return num1-num2;}
        
function multiply(num1,num2){
        return num1*num2;}
    
      
function divide(num1,num2){
        return num1/num2;}

function percentage(num_percen){
    return num_percen/100;

}
    
    
    

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
var reg = /^\d$/;

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
        num1 += buttonValue;
       }else{
        num2 += buttonValue; 

       }

    }

    const subDisplay = document.querySelector(".sub_display")
    if(subtext){
         latestText = subtext + num2;
    }

    subDisplay.textContent = latestText;

    }


else if(buttonValue === '.'){
    if(!num1.includes(".") && !first){
        num1 += '.';
    const display = document.querySelector(".main_display");
    const newNum = document.createElement("span");
    newNum.textContent = buttonValue;
    display.appendChild(newNum);
}else if (!num2.includes('.') && first) {
    num2 += '.';
    const display = document.querySelector(".main_display");
    const newNum = document.createElement("span");
    newNum.textContent = buttonValue;
    display.appendChild(newNum);
}

}

     else if(buttonValue === '+' || buttonValue === '-' || buttonValue === '×' || buttonValue === '÷') {
        if (first === false) {
            first = true;
            operator = buttonValue;
            console.log(operator);
            const display=document.querySelector(".main_display");
            display.textContent="";

            const subDisplay = document.querySelector(".sub_display")
            subtext = num1 + operator;
            subDisplay.textContent = subtext;



        }

}
    else if(buttonValue === '='){
        if(num1 && operator&&num2){
            const result = operate(num1,operator,num2);
            const display = document.querySelector(".main_display");
            display.textContent = result.toFixed(2);
            num1 = result.toString();
            num2 = '';
            operator=null;
            first=false;
            numCount=0;
          

        }
    }

    else if(buttonValue === 'AC'){
        const display = document.querySelector(".main_display");
        const subDisplay = document.querySelector(".sub_display");
        num1 = '';
        num2 = '';
        operator= null;
        display.textContent='';
        subDisplay.textContent='';
        subtext = '';
        latestText = '';
        first=false;
        numCount=0;
        
        }

        else if(buttonValue === '%'){
            if(!first){
                result_percen = percentage(num1);
                const display = document.querySelector(".main_display");
                display.textContent = result_percen;
                num1=result_percen;
                num2="";
               
            }
            else{
                result_percen = percentage(num2)
                const display = document.querySelector(".main_display");
                display.textContent = result_percen;
                num1=result_percen;
                num2="";
    
                
            }
        }

        else if (buttonValue === 'C'){
            const display = document.querySelector(".main_display")
            const subDisplay = document.querySelector(".sub_display")
            display.textContent = display.textContent.slice(0,-1)
            subDisplay.textContent = subDisplay.textContent.slice(0,-1)
           
            if(!first){
                num1 = num1.slice(0, -1);
                    if(num1 ===""){
                        num1 ="";
                        console.log("fuck you first")
                    }
                   
        }
        else{
                num2 =num2.slice(0,-1);
                if(num2 ===""){
                    num2 ="";
                }
    
            

    }
}
    });
    
});

// operate(num1,operator,num2);
// const subDisplay = document.querySelector(".sub_display");
// subDisplay.innerHTML=subvalue+"hello";