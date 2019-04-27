// jshint esversion: 8
const { createServer } = require('http');
const next = require('next');

const app = next({
  dev: process.env.NODE_ENV !== 'production'
});

const routes = require('./routes.js');
const handler = routes.getRequestHandler(app);

(async () => {
  const port = process.env.PORT;
  await app.prepare();
  createServer(handler).listen(port || 3000, err => {
    if (err) throw err;
    console.log(`Ready on localhost:${port}`);
  });
})();
