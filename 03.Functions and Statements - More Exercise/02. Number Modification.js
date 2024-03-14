function numberModification(number){
function avgOfDigits(number1){
   let numberAsStr = number1.toString();
   let sum=0;
   for(let i=0;i<numberAsStr.length;i++){
sum+=parseInt(numberAsStr[i]);
   }
   return sum/numberAsStr.length;
}
while(avgOfDigits(number)<5){
    number = number.toString()+'9';
    number = parseInt(number);
}
console.log(number);
}