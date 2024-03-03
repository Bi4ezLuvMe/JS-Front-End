function solve(sentance,word){
console.log(sentance.split(' ').filter(x=>x===word).reduce((count)=>count+=1,0));
}