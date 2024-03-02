function solve(lostFightsCount,helmetPrice,swordPrice,shieldPrice,armorPrice){
 let totalPrice=0;
let brokenHelmets = Math.floor(lostFightsCount/2);
let brokenSwords = Math.floor(lostFightsCount/3);
let brokenShields = Math.floor(brokenHelmets/3);
let brokenArmors = Math.floor(brokenShields/2);
if(brokenHelmets>0){
    totalPrice+=brokenHelmets*helmetPrice;
}
if(brokenSwords>0){
    totalPrice+=brokenSwords*swordPrice;
}
if(brokenShields>0){
    totalPrice+=brokenShields*shieldPrice;
}
if(brokenArmors>0){
    totalPrice+=brokenArmors*armorPrice;
}
console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`)
}