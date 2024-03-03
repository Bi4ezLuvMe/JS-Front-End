function solve(sentance,wordToReplace){
//console.log(sentance.replaceAll(wordToReplace,'*'.repeat(wordToReplace.length)));
let censored = sentance.replace(new RegExp(wordToReplace, 'g'), '*'.repeat(wordToReplace.length));
console.log(censored);
}