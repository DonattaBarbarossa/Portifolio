// Desafio: Calculadora Científica
document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('calc-display');
  const buttonsContainer = document.getElementById('calc-buttons');
  
  const functions = [
    'sin', 'cos', 'tan', 'log', 'ln', '√', '^', 'π',
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C', '⌫'
  ];

  buttonsContainer.innerHTML = '';
  functions.forEach(btn => {
    const button = document.createElement('div');
    button.className = 'col-3';
    button.innerHTML = `<button class="btn btn-outline-secondary w-100">${btn}</button>`;
    button.onclick = () => handleCalcClick(btn);
    buttonsContainer.appendChild(button);
  });

  let currentInput = '0';
  let prevInput = '';
  let operation = null;

  function updateDisplay() {
    display.value = currentInput.length > 12 ? parseFloat(currentInput).toExponential(5) : currentInput;
  }

  function handleCalcClick(value) {
    if (!isNaN(value) || value === '.') {
      currentInput = currentInput === '0' ? value : currentInput + value;
    } else if (value === 'C') {
      currentInput = '0';
      prevInput = '';
      operation = null;
    } else if (value === '⌫') {
      currentInput = currentInput.length === 1 ? '0' : currentInput.slice(0, -1);
    } else if (['sin', 'cos', 'tan', 'log', 'ln', '√', 'π'].includes(value)) {
      let num = parseFloat(currentInput);
      switch(value) {
        case 'sin': currentInput = String(Math.sin(num * Math.PI / 180)); break;
        case 'cos': currentInput = String(Math.cos(num * Math.PI / 180)); break;
        case 'tan': currentInput = String(Math.tan(num * Math.PI / 180)); break;
        case 'log': currentInput = String(Math.log10(num)); break;
        case 'ln': currentInput = String(Math.log(num)); break;
        case '√': currentInput = String(Math.sqrt(num)); break;
        case 'π': currentInput = String(Math.PI); break;
      }
    } else if (value === '^') {
      prevInput = currentInput;
      currentInput = '0';
      operation = '^';
    } else if (['+', '-', '*', '/'].includes(value)) {
      if (operation && currentInput !== '0') compute();
      prevInput = currentInput;
      currentInput = '0';
      operation = value;
    } else if (value === '=') {
      compute();
    }
    updateDisplay();
  }

  function compute() {
    let computation;
    const prev = parseFloat(prevInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;
    switch(operation) {
      case '+': computation = prev + current; break;
      case '-': computation = prev - current; break;
      case '*': computation = prev * current; break;
      case '/': computation = prev / current; break;
      case '^': computation = Math.pow(prev, current); break;
      default: return;
    }
    currentInput = String(computation);
    operation = null;
    prevInput = '';
  }
});