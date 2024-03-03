function solve(numbers,n){
    let output=[];
for(let i =0; i<numbers.length;i++){
    if(i%n===0){
        output.push(numbers[i]);
    }
}
return output;
}