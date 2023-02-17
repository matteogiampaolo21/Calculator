
let displayValue = "0";
let isFirstInput = true;
let previousOperator = ""



function add(n1,n2){
    displayValue = (Math.round((n1+n2) * 100) / 100).toString();
    previousOperator = "";
}
function minus(n1,n2){
    displayValue = (Math.round((n1-n2) * 100) / 100).toString();
    previousOperator = "";
}
function multiply(n1,n2){
    displayValue = (Math.round((n1*n2) * 100) / 100).toString();
    previousOperator = "";
}
function divide(n1,n2){
    displayValue = (Math.round((n1/n2) * 100) / 100).toString();
    if (displayValue == "Infinity" || displayValue == "NaN"){
        handleClear();
        alert("There was an error")
    }
    previousOperator = "";
}
function handleClear(){
    displayValue = "0"
    isFirstInput = true;
    previousOperator = "";
    document.getElementById("currentOperationScreen").innerText = displayValue;
}

function handleDelete(){
    if("+−×÷".includes(displayValue[displayValue.length -1]) || (displayValue[0] == "0" && displayValue.length == 1)){return};
    displayValue = displayValue.slice(0, -1);
    document.getElementById("currentOperationScreen").innerText = displayValue;
}

function handleClick(event){
    const input = (event.target.innerText);

    if ("0123456789.".includes(input) ){
        displayValue += input;
        document.getElementById("currentOperationScreen").innerText = displayValue;

    } else if("+−×÷".includes(input) && !("+−×÷".includes(displayValue[displayValue.length - 1]))){
        if (isFirstInput){
            displayValue += input;
            document.getElementById("currentOperationScreen").innerText = displayValue;
            previousOperator = event.target.value;
            isFirstInput = false;
            
        }else{
            const tempValues = (displayValue.split('+').join(',').split('−').join(',').split('×').join(',').split('÷').join(',').split(",").map(Number));
            operate(previousOperator,tempValues[0],tempValues[1])
            previousOperator = event.target.value
            displayValue += input;
            document.getElementById("currentOperationScreen").innerText = displayValue;
            

        }
        
    }else {
        const tempValues = (displayValue.split('+').join(',').split('−').join(',').split('×').join(',').split('÷').join(',').split(",").map(Number));
        if(tempValues.length == 2){
            operate(previousOperator,tempValues[0],tempValues[1])
            document.getElementById("currentOperationScreen").innerText = displayValue;
        }else{
            displayValue = tempValues[0];
            document.getElementById("currentOperationScreen").innerText = displayValue;


        }
    }
}


function operate(operator,n1,n2){
    switch (operator){
        case "addition":
            add(n1,n2);
            break;
        case "subtraction":
            minus(n1,n2);
            break;
        case "multiplication":
            multiply(n1,n2);
            break;
        case "division":
            divide(n1,n2);
            break;
        default:
            console.log("Something went wrong.")
    }
}