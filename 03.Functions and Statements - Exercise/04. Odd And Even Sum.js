function oddEvenSum(number){
    let evenSum= number.toString().split('').map(x=>parseInt(x)).filter(x=>x%2===0).reduce((sum,curr)=>sum+=curr,0);
    let oddSum= number.toString().split('').map(x=>parseInt(x)).filter(x=>x%2!==0).reduce((sum,curr)=>sum+=curr,0);
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}