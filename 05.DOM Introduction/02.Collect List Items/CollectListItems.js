function extractText() {
   const contentElement = document.getElementById('items');
   const resultElement = document.getElementById('result');

   const text = contentElement.textContent;
   resultElement.textContent = text;
}