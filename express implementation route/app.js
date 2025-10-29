const express = require('express');
const app = express();

// Default route
app.get('/', (req, res) => {
  res.send('<h1>Welcome to Express.js</h1><p>This is the Home Page.</p>');
});

// About route
app.get('/about', (req, res) => {
  res.send('<h1>About Us</h1><p>This page provides information about our application.</p>');
});

// Contact route
app.get('/contact', (req, res) => {
  res.send('<h1>Contact Page</h1><p>Email us at: zoya@example.com</p>');
});

// Services route
app.get('/services', (req, res) => {
  res.send('<h1>Our Services</h1><p>We offer web development and design solutions.</p>');
});

// Fallback route (for 404 errors)
app.use((req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});
