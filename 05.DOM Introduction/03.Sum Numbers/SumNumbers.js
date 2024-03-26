function calc() {
    const number1Element = document.getElementById('num1');
    const number2Element = document.getElementById('num2');
    const sumElement = document.getElementById('sum');

    const number1 = Number(number1Element.value);
    const number2 = Number(number2Element.value);

    sumElement.value = number1+number2;
}
