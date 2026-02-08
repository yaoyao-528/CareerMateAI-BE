const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);
  res.end('Helloss Worxxx==ld\n');
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
