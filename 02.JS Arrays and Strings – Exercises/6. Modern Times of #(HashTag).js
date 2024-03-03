function solve(sentance){
let speacialWords = sentance.split(' ').filter(x=>x.match(/#[a-zA-Z]+/)).map(x=>x.slice(1));
console.log(speacialWords.join('\n'));
}