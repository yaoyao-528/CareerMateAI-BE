const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  console.log(req.method, req.url);
  res.send('Hello from express\n');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
}); 
