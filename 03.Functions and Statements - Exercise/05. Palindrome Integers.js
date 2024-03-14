function isPalindrome(numbers){
for(let i=0;i<numbers.length;i++){
    let numAsStr=numbers[i].toString();
    let splitted = numAsStr.split('');
    let reversed = splitted.reverse().join('');
    if(numAsStr===reversed){
        console.log('true');
    }else{
        console.log('false');
    }
}
}