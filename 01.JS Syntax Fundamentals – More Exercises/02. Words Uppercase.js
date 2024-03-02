function solve(sentence) {
    let arr = sentence.split(/\W+/).filter(x => x);
    let str = arr.map(x => x.toUpperCase()).join(', ');
    console.log(str);
}