function solve(speed,type){
    if(type=='motorway'){
      if(speed<=130){
       console.log(`Driving ${speed} km/h in a 130 zone`);
      }else{
       let type;
       if(speed-130<=20){
        type = 'speeding';
       }else if(speed-130<=40){
        type = 'excessive speeding';    
       }else{
        type = 'reckless driving'
       }
       console.log(`The speed is ${speed-130} km/h faster than the allowed speed of 130 - ${type}`)
      }
    }else if(type=='interstate'){
        if(speed<=90){
            console.log(`Driving ${speed} km/h in a 90 zone`);
           }else{
            let type;
            if(speed-90<=20){
             type = 'speeding';
            }else if(speed-90<=40){
             type = 'excessive speeding';    
            }else{
                type = 'reckless driving'
            }
            console.log(`The speed is ${speed-90} km/h faster than the allowed speed of 90 - ${type}`)
           }
    }else if(type=='city'){
        if(speed<=50){
            console.log(`Driving ${speed} km/h in a 50 zone`);
           }else{
            let type;
            if(speed-50<=20){
             type = 'speeding';
            }else if(speed-50<=40){
             type = 'excessive speeding';    
            }else{
                type = 'reckless driving'
            }
            console.log(`The speed is ${speed-50} km/h faster than the allowed speed of 50 - ${type}`)
           }
    }else if(type=='residential'){
        if(speed<=20){
            console.log(`Driving ${speed} km/h in a 20 zone`);
           }else{
            let type;
            if(speed-20<=20){
             type = 'speeding';
            }else if(speed-20<=40){
             type = 'excessive speeding';    
            }else{
                type = 'reckless driving'
            }
            console.log(`The speed is ${speed-20} km/h faster than the allowed speed of 20 - ${type}`)
           }
    }
}