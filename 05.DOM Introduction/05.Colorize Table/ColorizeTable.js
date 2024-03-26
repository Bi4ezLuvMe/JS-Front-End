function colorize() {
   let evenTableRowsElements = document.querySelectorAll('table tr:nth-child(2n)');
   for (let row of evenTableRowsElements) {
      row.style.background = 'teal';
   }
}