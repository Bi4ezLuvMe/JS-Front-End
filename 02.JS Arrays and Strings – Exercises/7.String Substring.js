function solve(word,text){
if(text.toLowerCase().split(' ').includes(word)){
    console.log(word);
}else{
    console.log(`${word} not found!`);
}
}