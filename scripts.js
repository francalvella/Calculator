let firstNumber
let secondNumber
let finalResult
let operation
const numbers = document.getElementsByClassName("number");
const resultHtml = document.getElementById("result");
const symbols = document.getElementsByClassName("symbols")
const equal = document.getElementById("=")
const clear = document.getElementById("clear")

for (let i=0; i< symbols.length; i++){
    symbols[i].addEventListener("click",function(){
        if(this===equal){

        }else{
            firstNumber = resultHtml.innerHTML;
            operation = this.innerHTML;
            resultHtml.innerHTML = "0";                  
        }
    })
}


for (let i=0; i< numbers.length; i++) {
    numbers[i].addEventListener("click",function() {
       if(resultHtml.innerHTML==0){
           resultHtml.innerHTML=this.innerHTML
        }else if(resultHtml.innerHTML.length<16){
           resultHtml.innerHTML+=this.innerHTML
       };
    });
}



clear.addEventListener("click", ()=>{
    resultHtml.innerHTML="0"
    })

equal.addEventListener("click",function(){
    if(firstNumber){
        secondNumber = resultHtml.innerHTML;
        if(operation==="+"){
            finalResult = Number(firstNumber) + Number(secondNumber);
            resultHtml.innerHTML = finalResult;
            firstNumber;
            secondNumber;
        }else if(operation==="-"){
            finalResult = Number(firstNumber) - Number(secondNumber);
            resultHtml.innerHTML = finalResult;
            firstNumber;
            secondNumber;
        } else if(operation==="/"){
            finalResult = Number(firstNumber) / Number(secondNumber);
            resultHtml.innerHTML = finalResult;
            firstNumber;
            secondNumber;
        } else if(operation==="x"){
            finalResult = Number(firstNumber) * Number(secondNumber);
            resultHtml.innerHTML = finalResult;
            firstNumber;
            secondNumber;
        }
    }  
})

