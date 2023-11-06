const express = require("express");
const bodyParser = require('body-parser');
const port = 3000;
const loaders = require('./loaders');

async function startServer() {
  const app = express();
  app.use(bodyParser.json());

  await loaders.init(app);

  app.listen(port, err => {
    if (err) {
      debug(err);
      return;
    }
    console.log(`Example app listening on port ${port}!`);
  });
}

startServer();
