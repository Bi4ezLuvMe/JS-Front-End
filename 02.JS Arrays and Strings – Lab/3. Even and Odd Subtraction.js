function solve(numbers){
console.log((numbers.filter(x=>x%2===0).reduce((sum,curr)=>sum+=curr,0))-(numbers.filter(x=>x%2!==0).reduce((sum,curr)=>sum+=curr,0)));
}