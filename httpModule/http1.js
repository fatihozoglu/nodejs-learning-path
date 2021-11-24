// To use the HTTP server and client one must require('http')
const http = require("http");

// HTTP message headers are represented by an object like this:
const httpMessageHeaders = {
  "content-length": "123",
  "content-type": "text/plain",
  connection: "keep-alive",
  host: "mysite.com",
  accept: "*/*",
};
