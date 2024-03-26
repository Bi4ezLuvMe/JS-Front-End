function extract(content) {
 const textElement = document.getElementById(content);
 const text =textElement.textContent;

 const matches = text.matchAll(/\((.*?)\)/g);
let words = [];
for (const match of matches) {
    words.push(match[1]);
}

 return words.join('; ');
}
let text = extract("content");
console.log(text);