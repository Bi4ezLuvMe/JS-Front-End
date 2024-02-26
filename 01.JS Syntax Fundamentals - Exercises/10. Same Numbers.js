function isSame(number){
    let isSame =true;
    let sum =0;
    let numberAsStr = number.toString();
    for(let i=0;i<numberAsStr.length-1;i++){
     if(numberAsStr[i]!=numberAsStr[i+1]){
        isSame = false;
     }
     sum+=parseInt(numberAsStr[i]);
    }
    sum+=parseInt(numberAsStr[numberAsStr.length-1]);
    console.log(isSame);
    console.log(sum);
}