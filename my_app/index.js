const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const greeting = process.env.GREETING || 'World';

app.get('/', (req, res) => {
  res.send(`Hello, ${greeting}! Server is running on port ${port}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
