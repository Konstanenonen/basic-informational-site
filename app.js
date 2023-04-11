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

app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((error, req, res, next) => {
  console.log('this is the error', error);

  if (error.status === 404) {
    fs.readFile('./404.html', (err, data) => {
      if (err) {
        res.writeHead(404, { 'Conten-Type': 'text/html' });
        return res.end('404 There is nothing here');
      }

      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    });
  }
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
