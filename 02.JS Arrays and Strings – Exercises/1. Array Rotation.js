function solve(numbers,count){
for(let i=0;i<count;i++){
numbers.push(numbers.shift());
}
console.log(numbers.join(' '));
}