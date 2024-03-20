function solve(input){
    let cataloge = [];
    for (const curr of input) {
        let splitted = curr.split(' : ')
        cataloge.push({name:splitted[0],price:splitted[1]})
    }
    cataloge = cataloge.sort((a,b)=>a.name.localeCompare(b.name));
    let letter='';
   for (let i=0;i<cataloge.length;i++){
if(cataloge[i].name[0]!==letter){
    console.log(cataloge[i].name[0]);
    letter = cataloge[i].name[0];
}
console.log(`  ${cataloge[i].name}: ${cataloge[i].price}`);
   }
}