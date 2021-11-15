// Importing the standart library module HTTP for creating a HTTP server
const http = require("http");

//Setting the hostname and port number for the server to listen
const hostname = "127.0.0.1";
const port = 3000;

// The createServer() method of http creates a new HTTP server and returns it
const server = http.createServer((req, res) => {
  // Set the statusCode property to 200, to indicate a successful response
  res.statusCode = 200;
  // Set the Content-Type header
  res.setHeader("Content-Type", "text/plain");
  // Close the response, adding the content as an argument to end()
  res.end("Hello NodeJS");
});

// The server is set to listen on the specified port and host name
server.listen(port, hostname, () => {
  // When the server is ready, the callback function is called, in this case informing us that the server is running
  console.log(`Server running at http://${hostname}:${port}`);
});
