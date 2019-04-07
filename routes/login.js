const express = require('express');
const bodyParser = require('body-parser');

const loginRouter = express.Router();

loginRouter.use(bodyParser.json());

loginRouter.post('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = loginRouter;
