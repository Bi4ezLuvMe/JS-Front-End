function order(product,count){
    let totalPrice=0;
    switch(product){
        case 'coffee':totalPrice=1.5*count;break;
        case 'water':totalPrice=1*count;break;
        case 'coke':totalPrice=1.4*count;break;
        case 'snacks':totalPrice=2*count;break;
    }
    console.log(totalPrice.toFixed(2));
}