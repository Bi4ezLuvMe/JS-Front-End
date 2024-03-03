function solve(words,sentance){
let arrWords = words.split(', ');
for(let i =0;i<arrWords.length;i++){
    sentance=sentance.replace('*'.repeat(arrWords[i].length),arrWords[i]);
}
console.log(sentance);
}