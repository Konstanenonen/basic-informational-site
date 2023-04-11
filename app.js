const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  fs.readFile('./index.html', (err, data) => {
    if (err) {
      res.writeHead(404, { 'Conten-Type': 'text/html' });
      return res.end('404 There is nothing here');
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
});

app.get('/about', (req, res) => {
  fs.readFile('./about.html', (err, data) => {
    if (err) {
      res.writeHead(404, { 'Conten-Type': 'text/html' });
      return res.end('404 There is nothing here');
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
});

app.get('/contact-me', (req, res) => {
  fs.readFile('./contact-me.html', (err, data) => {
    if (err) {
      res.writeHead(404, { 'Conten-Type': 'text/html' });
      return res.end('404 There is nothing here');
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
