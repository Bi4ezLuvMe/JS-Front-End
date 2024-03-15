function solve(jsonData){
let person = JSON.parse(jsonData);
for (const curr of Object.keys(person)) {
    console.log(`${curr}: ${person[curr]}`);
}
}