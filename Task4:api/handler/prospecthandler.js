const express = require("express");
const router = express.Router();
const User = require("../models/user");

class ActionHandler {
  //view all prospects
  viewProspects(req, res) {
    User.find({}).then(function(users) {
      res.send(users);
    });
  }
  //view a specific prospect
  viewProspect(req, res) {
    User.find({ _id: req.params.id }).then(function(users) {
      res.send(users);
    });
  }
  //add new prospect to the db
  addProspect(req, res, next) {
    console.log(req.body);
    User.create(req.body)
      .then(function(user) {
        res.send(user);
      })
      .catch(next);
  }
  //update a prospect in the db
  updateProspect(req, res, next) {
    User.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function() {
      User.findOne({ _id: req.params.id }).then(function(user) {
        res.send(user);
      });
    });
  }

  //delete a prospect in the db
  deleteProspect(req, res, next) {
    User.findByIdAndRemove({ _id: req.params.id }).then(function(user) {
      res.send(user);
    });
  }

  //delete all prospects
  deleteProspects(req, res) {
    User.remove({}).then(function(user) {
      res.send({ user });
    });
  }
}
module.exports = ActionHandler;
