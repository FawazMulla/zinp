import React from 'react';

// Define a functional component
function Greeting() {
  return (
    <div>
      <h1>Hello, Welcome to React Functional Components!</h1>
      <p>This is a simple example of a functional component.</p>
    </div>
  );
}

// The main App component that uses Greeting
function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Greeting />
    </div>
  );
}

export default App;
