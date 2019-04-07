const express = require('express');
const bodyParser = require('body-parser');

const todoRouter = express.Router();
const mongoose = require('mongoose');
const todo = require('../models/todo');

todoRouter.use(bodyParser.json());

todoRouter.route('/')
  .post((req, res, next) => {
    switch (req.body.mode) {
      case "i": {
        todo.create(req.body)
          .then((todo) => {
            console.log('todo Created ', todo);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(todo);
          }, (err) => next(err))
          .catch((err) => next(err));

        break;
      }

      case "d": {
        todo.findByIdAndRemove(req.params.dishId)
          .then((resp) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
          }, (err) => next(err))
          .catch((err) => next(err));

        break;
      }

      case "u": {
        Dishes.findByIdAndUpdate(req.params.todoId, {
          $set: req.body
        }, { new: true })
          .then((dish) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(dish);
          }, (err) => next(err))
          .catch((err) => next(err));

        break;
      }
    }
  })
  .get((req, res, next) => {
    todo.find({})
      .then((todo) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(todo);
      }, (err) => next(err))
      .catch((err) => next(err));
  })

module.exports = todoRouter;
