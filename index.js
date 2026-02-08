const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);
  res.end('Helloss Worxxx==ld\n');
});

// lsof -i tcp:3000
server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
