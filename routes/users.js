const express = require('express');
const bodyParser = require('body-parser');

const userRouter = express.Router();
const mongoose = require('mongoose');
const Users = require('../models/user');

userRouter.use(bodyParser.json());

userRouter.route('/')
.post((req, res, next) => {
  Users.create(req.body)
  .then((user) => {
      console.log('User Created ', user);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(user);
  }, (err) => next(err))
  .catch((err) => next(err));
})

module.exports = userRouter;
