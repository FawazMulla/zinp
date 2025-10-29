// arithmetic.js
// Node.js console app for Arithmetic Operations using user input

const readline = require('readline');

// Create input/output interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask for first number
rl.question('Enter first number: ', (num1) => {
  // Ask for second number
  rl.question('Enter second number: ', (num2) => {
    // Ask for operation
    rl.question('Choose operation (+, -, *, /): ', (op) => {

      // Convert input strings to numbers
      const a = parseFloat(num1);
      const b = parseFloat(num2);
      let result;

      // Perform operation based on user choice
      switch (op) {
        case '+':
          result = a + b;
          break;
        case '-':
          result = a - b;
          break;
        case '*':
          result = a * b;
          break;
        case '/':
          result = b !== 0 ? a / b : 'Error: Division by zero!';
          break;
        default:
          result = 'Invalid operation!';
      }

      console.log(`\nResult: ${result}`);
      rl.close();
    });
  });
});
