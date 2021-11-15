// Importing the standart library module HTTP for creating a HTTP server
const http = require("http");

//Setting the hostname and port number for the server to listen
const hostname = "127.0.0.1";
const port = 3000;

// The createServer() method of http creates a new HTTP server and returns it
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello NodeJS");
});

// The server is set to listen on the specified port and host name
server.listen(port, hostname, () => {
  // When the server is ready, the callback function is called, in this case informing us that the server is running
  console.log(`Server running at http://${hostname}:${port}`);
});
