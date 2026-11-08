const express = require('express');
const app = express();
const port = 3500;


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('This is the about page');
})

app.get('/contact', (req, res) => {
  res.send('This is the contact page');
})

app.get('/services', (req, res) => {
  res.send('This is the services page');
})

app.get('/home', (req, res) => {
  res.send('This is the home page');
});




app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});