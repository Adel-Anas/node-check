const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello Node!!!!</h1>\n');
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});