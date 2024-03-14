function add(num1,num2,num3){
    let sum = num1+num2;
    function subtract(sum,num3){
        console.log(sum-num3);
    }
    subtract(sum,num3);
}