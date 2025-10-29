// server.js 
// Simple HTTP Server using Node.js


// 🧠 Theory:
// The HTTP (HyperText Transfer Protocol) module in Node.js allows us to create a web server that can handle client requests and send responses.
// It provides the method http.createServer() which creates a new web server instance.
// const http = require('http');
// Node.js provides the built-in http module to easily create and manage web servers without the need for external software.
// It demonstrates the event-driven, non-blocking architecture of Node.js.

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Welcome to My Node.js HTTP Server</h1>');
    res.write('<p>This is a simple server created using the http module.</p>');
    res.write('<p>Created by: Zoya Mulani</p>');
    res.end();
}
);

// define the port number
const PORT = 3000;

// start the server
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});