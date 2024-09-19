// Load the 'http' module
const http = require('http');

// Define the port number
const port = 8080;

// Create the server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Send the response body
  res.end('Hello World!');
});

// Listen for incoming requests
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});