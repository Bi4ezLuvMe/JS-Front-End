function solve(input){
let dictonary = [];
for (const curr of input) {
    let str = JSON.parse(curr);
   for (let term in str) {
   dictonary[term] = str[term];
   }
}
let sortedDic=Object.keys(dictonary).sort();
sortedDic.forEach(x=>console.log(`Term: ${x} => Definition: ${dictonary[x]}`))
}