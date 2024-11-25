document.addEventListener('DOMContentLoaded', () => {

    const darkModeToggle = document.createElement('button');
    darkModeToggle.textContent = 'Dark Mode';
    darkModeToggle.style.position = 'fixed';
    darkModeToggle.style.top = '20px';
    darkModeToggle.style.right = '20px';
    darkModeToggle.style.padding = '10px 15px';
    darkModeToggle.style.fontSize = '1rem';
    darkModeToggle.style.backgroundColor = '#333';
    darkModeToggle.style.color = '#fff';
    darkModeToggle.style.border = 'none';
    darkModeToggle.style.borderRadius = '5px';
    darkModeToggle.style.cursor = 'pointer';
    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });

    const calculatorButton = document.createElement('button');
    calculatorButton.textContent = 'Show Calculator';
    calculatorButton.style.position = 'fixed';
    calculatorButton.style.bottom = '20px';
    calculatorButton.style.right = '20px';
    calculatorButton.style.padding = '10px 15px';
    calculatorButton.style.fontSize = '1rem';
    calculatorButton.style.backgroundColor = '#333';
    calculatorButton.style.color = '#fff';
    calculatorButton.style.border = 'none';
    calculatorButton.style.borderRadius = '5px';
    calculatorButton.style.cursor = 'pointer';
    document.body.appendChild(calculatorButton);

    const calculator = document.querySelector('.calculator');

    calculatorButton.addEventListener('click', () => {
      calculator.style.display = calculator.style.display === 'flex' ? 'none' : 'flex';
    });

    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const result = document.getElementById('result');

    document.getElementById('add').addEventListener('click', () => {
      result.textContent = `Result: ${parseFloat(num1.value) + parseFloat(num2.value)}`;
    });

    document.getElementById('subtract').addEventListener('click', () => {
      result.textContent = `Result: ${parseFloat(num1.value) - parseFloat(num2.value)}`;
    });

    document.getElementById('multiply').addEventListener('click', () => {
      result.textContent = `Result: ${parseFloat(num1.value) * parseFloat(num2.value)}`;
    });

    document.getElementById('divide').addEventListener('click', () => {
      if (parseFloat(num2.value) === 0) {
        result.textContent = 'Error: Division by zero';
      } else {
        result.textContent = `Result: ${parseFloat(num1.value) / parseFloat(num2.value)}`;
      }
    });
  });