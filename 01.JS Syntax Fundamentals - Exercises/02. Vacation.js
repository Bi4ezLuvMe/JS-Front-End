function solve (number,type,day){
    let totalPrice;
    if(day==='Friday'){
        switch(type){
            case'Students':
            totalPrice = number*8.45;
            if(number>=30){
                totalPrice*=0.85;
            }
            break;
            case'Business':
            totalPrice = number*10.90;
            if(number>=100){
                totalPrice-=10*10.90;
            }
            break;
            case'Regular':
            totalPrice = number*15;
            if(number>=10&&number<=20){
             totalPrice*=0.95;
            }
            break;
        }
    }else if(day==='Saturday'){
        switch(type){
            case'Students':
            totalPrice = number*9.80;
            if(number>=30){
                totalPrice*=0.85;
            }
            break;
            case'Business':
            totalPrice = number*15.60;
            if(number>=100){
                totalPrice-=10*15.60;
            }
            break;
            case'Regular':
            totalPrice = number*20;
            if(number>=10&&number<=20){
                totalPrice*=0.95;
               }
            break;
        }
    }else if(day ==='Sunday'){
        switch(type){
            case'Students':
            totalPrice = number*10.46;
            if(number>=30){
                totalPrice*=0.85;
            }
            break;
            case'Business':
            totalPrice = number*16;
            if(number>=100){
                totalPrice-=10*16;
            }
            break;
            case'Regular':
            totalPrice = number*22.50;
            if(number>=10&&number<=20){
                totalPrice*=0.95;
               }
            break;
        }
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}