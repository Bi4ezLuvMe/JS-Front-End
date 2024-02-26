function sumDigits(number){
    let numberAsStr = number.toString();
    let sum = 0;
    for(let i = 0;i<numberAsStr.length;i++){
    sum+=parseInt(numberAsStr[i]);
    }
    console.log(sum);
}
