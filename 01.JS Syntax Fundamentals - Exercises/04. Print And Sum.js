function sum(start,end){
    let totalSum= 0;
    let array =[];
for (let i = start; i <= end; i++) {
    array.push(i);
    totalSum+=i;
}
console.log(array.join(' '));
console.log(`Sum: ${totalSum}`)
}
