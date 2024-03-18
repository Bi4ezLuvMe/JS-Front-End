function solve(input){
let carsInLot = [];
for (const curr of input) {
    const [cmd,number] = curr.split(', ');
    if(cmd === 'IN' && !carsInLot.includes(number)){
        carsInLot.push(number);
    }else if(cmd==='OUT' && carsInLot.includes(number)){
        const index = carsInLot.indexOf(number);
        carsInLot.splice(index,1);
    }
}
carsInLot.sort();
if(carsInLot.length===0){
    console.log('Parking Lot is Empty');
}else{
    carsInLot.forEach(x=>console.log(x))
}
}