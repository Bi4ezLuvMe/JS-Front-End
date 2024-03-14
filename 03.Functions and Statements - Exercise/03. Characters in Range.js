function asciiBetween(ch1,ch2){
let result='';
let start=Math.min(ch1.charCodeAt(0),ch2.charCodeAt(0));
let end=Math.max(ch1.charCodeAt(0),ch2.charCodeAt(0));
for(let i=start+1;i<end;i++){
    result+=String.fromCharCode(i)+' ';
}
console.log(result);
}