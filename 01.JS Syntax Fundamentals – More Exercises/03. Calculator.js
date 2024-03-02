function solve(num1,opp,num2){
    let result=0;
switch(opp){
    case '+':
        result=num1+num2;
    break;
    case '-':
        result=num1-num2;
    break; 
    case '/':
       result=num1/num2;
    break;
    case '*':
        result=num1*num2;
     break;
}
console.log(result.toFixed(2));
}