// fileHandling.js
// Node.js program for File Handling (Write and Read operations)

const fs = require('fs');

// Writing data to a file
fs.writeFile('example.txt', 'Hello, this is a file created using Node.js!\nZoya Mulani 231435', (err) => {
  if (err) throw err;
  console.log(' File written successfully.');

  // Reading the same file
  fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(' File content:');
    console.log(data);
  });
});
