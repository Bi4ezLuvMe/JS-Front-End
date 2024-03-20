function solve(object){
Object.keys(object).forEach(element => {
    console.log(`${element} -> ${object[element]}`);
});
}