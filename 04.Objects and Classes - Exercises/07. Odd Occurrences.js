function solve(input){
let wordsCount = [];
let output=[];
input = input.toLowerCase();
let words = input.split(' ');
for (const word of words) {
    if(wordsCount.find(x=>x.word===word)!=undefined){
     let word1 = wordsCount.find(x=>x.word===word);
        word1.count++;
    }else{
        wordsCount.push({word:word,count:1})
    }
}
for (const word of wordsCount) {
    if(word.count%2!=0){
        output.push(word.word);
    }
}
console.log(output.join(' '));
}