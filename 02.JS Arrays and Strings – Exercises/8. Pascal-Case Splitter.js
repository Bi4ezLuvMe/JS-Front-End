function solve(string){
    function isUpperCase(ch){
     if(ch===ch.toUpperCase()){
        return true;
     }
     return false;
    }
let splittet='';
for(let i =0; i < string.length; i++){
if(!isUpperCase(string[i])){
splittet+=string[i];
}else{
    if(i!==0){
        splittet+=' '+string[i];
    }else{
        splittet+=string[i];
    }
}
}
let splittedArr = splittet.split(' ');
console.log(splittedArr.join(', '));
}