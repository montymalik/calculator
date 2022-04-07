const display = document.querySelector('.lcd-screen');
const keys = document.querySelector('.keys-container');
let num1;
let operator;
let keyContent;
let array = [];
let array2 = [];

keys.addEventListener('click', e => {
    if (e.target.matches('.key')) {
        if (e.target.innerText === "AC") {
            array = [];
            array2 = [];
            operator = "";
            display.innerText = "";
        } else if(e.target.dataset.action === "plus" || e.target.dataset.action === "minus" || e.target.dataset.action === "multiply") {
            if (!operator) {
                operator = e.target.dataset.action;
                array.push(num1);
                display.innerText = "";
            } else {
                console.log(operator);
                console.log(array2);
                display.innerText = calculator(array2, operator);
            }
        } else if(e.target.dataset.action === "calculate") {
            array.push(num1);
            console.log(array);
            results = (calculator(array, operator));
            display.innerText = results;
            num2 = +array.join('');
            array2.push(num2);
        } else {
        const key = e.target;
        // const action = key.dataset.action;
        let keyContent = key.textContent;
        const displayedNum = display.textContent;
        display.innerText += keyContent;
        num1 = +display.innerText;

    }
}});


function calculator(array, operator) {
    let initialValue = 0;
    if (operator === "plus") {
        return array.reduce((currentValue, previousValue) => currentValue + previousValue, initialValue);
    }
    if (operator === "minus") {
        const subtract = (accumulator, number) => accumulator - number;
        return array.reduce(subtract);
        }
    if (operator === "multiply") {
        return array.reduce((accumulator, number) => accumulator * number);
    }

}