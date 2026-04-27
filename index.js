const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Mohan 🚀 from your own app');
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
