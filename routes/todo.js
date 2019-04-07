const express = require('express');
const bodyParser = require('body-parser');

const todoRouter = express.Router();
const mongoose = require('mongoose');
const todo = require('../models/todo');

todoRouter.use(bodyParser.json());

todoRouter.route('/')
.post((req, res, next) => {
  todo.create(req.body)
  .then((todo) => {
      console.log('todo Created ', todo);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(todo);
  }, (err) => next(err))
  .catch((err) => next(err));
})
.get((req,res,next) => {
  todo.find({})
  .then((todo) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(todo);
  }, (err) => next(err))
  .catch((err) => next(err));
})

module.exports = todoRouter;
