const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("WELCOME TO HOME PAGE");
  } else if (req.url === "/About") {
    res.end("Welcome to the About Page");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" }); // Set the 404 status code and content type
    res.end('<h1>ERROR 404: PAGE NOT FOUND</h1>');
  }
});

// Start the server and listen on port 5005
server.listen(5005, () => {
  console.log('Server is running on http://localhost:5005');
});
