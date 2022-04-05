function add(num1,num2) {
    result = num1 + num2;
    currentOperand = result;
}

function subtract(num1,num2) {
    result = num1 - num2;
    currentOperand = result;
}

function multiply(num1,num2) {
    result = num1 * num2;
    currentOperand = result;
}

function divide(num1,num2) {
    result = num1 / num2;
    currentOperand = result;
}

// Add, subtract, multiply, divide operations
function operate() {
    let result;
    let previous = parseFloat(previousOperand);
    let current = parseFloat(currentOperand);
    if (isNaN(previous) || isNaN(current)) return;
    if (operation == '+' ) {
        add(previous,current)
    } else if (operation == '−') {
        subtract(previous,current)
    } else if (operation == '×') {
        multiply(previous,current)
    } else if (operation == '÷') {
        divide(previous,current)
    }
    operation = undefined;
    previousOperand = '';
}

function clear() {
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
}

function deleteInput() {
    currentOperand = currentOperand.toString().slice(0,-1);
}

function appendNumber(number) {
    if (currentOperand.length >= 13) return;
    if (number === '.' && currentOperand.includes('.')) return;
    currentOperand += number;
}

function chooseOperation(operation) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        operate();
    }
    this.operation = operation;
    previousOperand = currentOperand;
    currentOperand = '';
}

function displayNumber(number) {
    
}

function updateDisplay() {
    if (currentOperand == Infinity) {
        display.innerText = 'x0r6ztGiggle';
        return;
    }
    if (currentOperand.toString().length > 13 && currentOperand.toString().includes('.')) {
        let length = currentOperand.toString().length;
        let trimAmount = length - 13;
        for (i=0;i<trimAmount;i++) {
            currentOperand = currentOperand.toString().slice(0,-1)
        }
        display.innerText = currentOperand;
    } else display.innerText = currentOperand;
}


// Variables
let numberKey = document.querySelectorAll('[data-number]');
let operationKey = document.querySelectorAll('[data-operation]');
let equalsKey = document.querySelector('[data-equals]');
let clearKey = document.querySelector('[data-clear]');
let deleteKey = document.querySelector('[data-delete]')
let display = document.querySelector('.display');
let currentOperand = '';
let previousOperand = '';

// Event listener
numberKey.forEach(key => {
    key.addEventListener('click', e => {
        appendNumber(key.innerText);
        updateDisplay();
    })
})

operationKey.forEach(key => {
    key.addEventListener('click', e => {
        chooseOperation(key.innerText);
        updateDisplay();
    })
})

equalsKey.addEventListener('click', e => {
    if (currentOperand == '') {
        display.innerText = previousOperand;
        return
    }
    operate();
    updateDisplay();
    clear();
})

clearKey.addEventListener('click', e => {
    clear();
    updateDisplay();
})

deleteKey.addEventListener('click', e => {
    deleteInput();
    updateDisplay();
})



// []Listen for firstNumber keys
//     -Show number keys on display when clicked

// []Listen for operator key
//     -Store display value in firstNumber variable when clicked
//     -Store operator key in variable when clicked
//     -Clear display

// []Listen for secondNumber keys
//     -Show number keys on display when clicked

// []Listen for equals key
//     -Store display value in secondNumber vairable when clicked
//     -Perform operation using firstNumber, secondNumber and operator variables
//     -Display result
//     -Store result in firstNumber for futher operation

