const https = require('http');
const url = require('url');
const fs = require('fs');

https
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    const urlObject = url.parse(req.url, true);
    const pathName = urlObject.pathname;

    if (pathName === '/') {
      fs.readFile('./index.html', (err, data) => {
        if (err) {
          res.writeHead(404, { 'Conten-Type': 'text/html' });
          return res.end('404 There is nothing here');
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
      });
    }

    if (pathName === '/about') {
      fs.readFile('./about.html', (err, data) => {
        if (err) {
          res.writeHead(404, { 'Conten-Type': 'text/html' });
          return res.end('404 There is nothing here');
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
      });
    }

    if (pathName === '/contact-me') {
      fs.readFile('./contact-me.html', (err, data) => {
        if (err) {
          res.writeHead(404, { 'Conten-Type': 'text/html' });
          return res.end('404 There is nothing here');
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
      });
    }

    if (
      pathName !== '/' &&
      pathName !== '/about' &&
      pathName !== '/contact-me'
    ) {
      fs.readFile('./404.html', (err, data) => {
        if (err) {
          res.writeHead(404, { 'Conten-Type': 'text/html' });
          return res.end('404 There is nothing here');
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
      });
    }
  })
  .listen(8080);
