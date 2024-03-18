function solve(input1,input2){
const input = input1.concat(input2);
const products = {};
for(let i =0;i<input.length-1;i+=2){
    const product = input[i];
    const price = Number(input[i+1]);
    if(products.hasOwnProperty(product)){
        products[product] += price;
    }else{
    products[product] = price;
    }

}
for (const product in products) {
    console.log(`${product} -> ${products[product]}`);
}
}