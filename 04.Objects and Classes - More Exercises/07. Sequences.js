function solve(input){
    function arraysAreEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;
        return arr1.every((val, index) => val === arr2[index]);
    }
    function printArrays(arrays) {
        arrays.forEach(arr => {
            console.log(`[${arr.join(', ')}]`);
        });
    }
    let notDuplicates = [];
for (const curr of input) {
   let splittedArr = JSON.parse(curr);
   splittedArr.sort((a,b)=>b-a);
   let isThere = false;
  for (let arr of notDuplicates) {
    if(arraysAreEqual(splittedArr,arr)){
  isThere = true;
    }
  }
   if(!isThere){
    notDuplicates.push(splittedArr);
   }
}
notDuplicates.sort((a,b)=>a.length-b.length);
printArrays(notDuplicates);
}
solve(["[-3, -2, -1, 0, 1, 2, 3, 4]",

"[10, 1, -17, 0, 2, 13]",

"[4, -3, 3, -2, 2, -1, 1, 0]"]);