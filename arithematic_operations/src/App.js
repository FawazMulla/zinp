import React from 'react';

function App() {
  const a = 30;
  const b = 30;

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Arithmetic Operations using JSX</h1>
      <h3>a = {a}, b = {b}</h3>
      <p>Addition: {a + b}</p>
      <p>Subtraction: {a - b}</p>
      <p>Multiplication: {a * b}</p>
      <p>Division: {a / b}</p>
    </div>
  );
}

export default App;
