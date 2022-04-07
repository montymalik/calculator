const display = document.querySelector('.lcd-screen');
const keys = document.querySelector('.keys-container');


keys.addEventListener('click', e => {
    if (e.target.dataset.action === "plus" || e.target.dataset.action === "multiply") {
        a = display.innerText;
        operator = e.target.dataset.action;
        display.innerText = "";
    } else if(e.target.dataset.action === "calculate") {
        b = display.innerText;
        results = calculator(a, b, operator)
        updateDisplay(results);
    } else {
        display.innerText = e.target.innerText;
    };
});


function calculator(a, b, operator) {
        a = Number(a);
        b = Number(b);
        if (operator === "plus") {
            return a+b;
        }
        if (operator === "multiply") {
            return a*b;
        }
        if (operator === "minus") {
            return a-b;
        }
        if (operator === "divide") {
            return a/b;
        }
};

function clearDisplay() {
    return display.innerText = "";
}

function updateDisplay(a) {
    display.innerText = a;
}
