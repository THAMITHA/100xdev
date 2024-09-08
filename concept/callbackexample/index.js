function sum(num1, num2, fnToCall){
    let result = num1 + num2;
    fnToCall(result)
}
function displayResult(data){
    console.log("Result of the sum is: "+ data)
}

function displayPassiveResult(data){
    console.log("Sum's result is: "+ data)
}
sum(1, 2, displayResult)
