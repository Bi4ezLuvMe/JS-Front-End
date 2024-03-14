function factirialDevisition(num1,num2){
    let factirialNum1=1;
    for(let i=2;i<=num1;i++){
        factirialNum1*=i;
    }
    let factirialNum2=1;
    for(let i=2;i<=num2;i++){
        factirialNum2*=i;
    }
    console.log((factirialNum1/factirialNum2).toFixed(2));
}
factirialDevisition(0,1);