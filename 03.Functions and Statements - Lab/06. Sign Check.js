function sign(num1,num2,num3){
    let negatives=0;
    if(num1<0){
    negatives++;
    }
    if(num2<0){
        negatives++;
    }
    if(num3<0){
        negatives++;
    }
    negatives%2===0?console.log('Positive'):console.log('Negative');
}