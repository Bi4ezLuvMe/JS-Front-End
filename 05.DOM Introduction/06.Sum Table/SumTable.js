function sumTable() {
 const priceTableElements = document.querySelectorAll('table td:nth-child(n+2):not(#sum)');
 const sumElement = document.getElementById('sum');

 let sum = 0;
 for (const price of priceTableElements) {
   sum+=Number(price.textContent);
 }
 
sumElement.textContent = sum;
}