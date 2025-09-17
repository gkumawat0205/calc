const display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value.replace(/÷/g, '/').replace(/×/g, '*').replace(/−/g, '-');
        // Handle percent
        expression = expression.replace(/(\d+(\.\d+)?)%/g, '($1/100)');
        let result = eval(expression);
        display.value = result;
    } catch {
        display.value = 'Error';
    }
}

// Allow pressing Enter key to calculate
display.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        calculate();
    }
});