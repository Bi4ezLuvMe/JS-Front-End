function calculator(num1,num2,operator){
    const calculate = (num1, num2, operator) => {
    const operators={
    'multiply':(num1,num2)=>num1*num2, 
    'divide':(num1,num2)=>num1/num2,
    'add':(num1,num2)=>num1+num2,
    'subtract':(num1,num2)=>num1-num2
};
    const operation = operators[operator];
    return operation ? operation(num1, num2) : "Invalid operator";
};
console.log(calculate(num1,num2,operator));
}