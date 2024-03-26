function editElement(element,match,replacer) {
   let textToReplace = element.textContent;
   while(textToReplace.includes(match)){
   textToReplace = textToReplace.replace(match,replacer);
   }
   element.textContent = textToReplace;
}