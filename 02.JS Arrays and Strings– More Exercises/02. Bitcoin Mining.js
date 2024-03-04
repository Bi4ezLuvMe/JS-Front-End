function solve(goldMined){
let dayOfFirstBitcoin=0;
let totalMoney=0;
let first=false;
for(let i=0;i<goldMined.length;i++){
    if((i+1)%3===0){
        totalMoney+=(goldMined[i]*0.7)*67.51;
    }else{
        totalMoney+=goldMined[i]*67.51;
    }
    if(totalMoney>=11949.16&&first==false){
        dayOfFirstBitcoin=i+1;
        first=true;
    }
}
let bitcoinsBought = Math.floor(totalMoney/11949.16);
console.log(`Bought bitcoins: ${bitcoinsBought}`);
if(bitcoinsBought>0){
    console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
}
console.log(`Left money: ${(totalMoney-(bitcoinsBought*11949.16)).toFixed(2)} lv.`);
}