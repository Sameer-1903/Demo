
var calculationOperator;
var textVal1;

function pressValue(num){
    var textValue = document.getElementById("textNumberBar").value;
    textValue =  textValue + num;
    document.getElementById("textNumberBar").value = textValue;
}

function selectOperator(selectedOperator){
    calculationOperator = selectedOperator;
    textVal1 = document.getElementById("textNumberBar").value;
     document.getElementById("textNumberBar").value = "";

}

function fetchResult(){
    var textVal2 = document.getElementById("textNumberBar").value;
    var result = 0;
    if(calculationOperator === "+"){
        result = Number(textVal1) + Number(textVal2);

    }
    if(calculationOperator === "-"){
        result = Number(textVal1) - Number(textVal2);

    }
    if(calculationOperator === "*"){
        result = Number(textVal1) * Number(textVal2);

    }
    if(calculationOperator === "+"){
        result = Number(textVal1) / Number(textVal2);

    }
    document.getElementById("textNumberBar").value = result;
}


function clearCalculator(){
    document.getElementById("textNumberBar").value ="";
    result = 0;
    
}



