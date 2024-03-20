function solve(input){
    function replaceAll(text,strToReplace,replacement){
        while(text.includes(strToReplace)){
            text = text.replace(strToReplace,replacement);
        }
        return text;
    }
let garages = [];
for (const curr of input) {
    let garageNumber = curr.split(' - ');
    let garage = garages.find(x=>x.number === garageNumber[0]);
   if(garage){
     garage.cars.push(garageNumber[1]);
   }else{
    garages.push({number:garageNumber[0],cars:[garageNumber[1]]})
   }
}
for (const garage of garages) {
    console.log(`Garage № ${garage.number}`);
    for (const car of garage.cars) {
        console.log(`--- ${replaceAll(car,':',' -')}`);
    }
}
}