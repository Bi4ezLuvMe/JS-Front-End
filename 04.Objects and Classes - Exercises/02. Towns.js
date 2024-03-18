function solve(input){
let towns = [];
for (const curr of input) {
    const currInput = curr.split(' | ');
    const town = currInput[0];
    const latitude = Number(currInput[1]).toFixed(2);
    const longitude = Number(currInput[2]).toFixed(2);
    towns.push({town,latitude,longitude});
}
for (const town of towns) {
    console.log(town);
}
}