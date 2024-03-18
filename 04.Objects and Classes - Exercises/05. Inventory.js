function solve(input){
    let heros = [];
class Hero{
    constructor(name,level,items){
        this.name = name;
        this.level = level;
        this.items = items;
    }
}
for (const curr of input) {
    const [name,level,items] = curr.split(' / ');
    heros.push(new Hero(name,level,items));
}
heros.sort((a,b)=>a.level-b.level);
for (const hero of heros) {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
}
}