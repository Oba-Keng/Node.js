const express = require("express");
const router = express.Router();
const User = require("../models/user");

//view a list of students/users from the db
router.get("/users", function(req, res) {
  User.find({}).then(function(users) {
    res.send(users);
  });
});
//view a specific student
router.get("/users/:id", function(req, res) {
  User.find({ _id: req.params.id }).then(function(users) {
    res.send(users);
  });
});
//add new prospect to the db
router.post("/users", function(req, res, next) {
  console.log(req.body);
  User.create(req.body)
    .then(function(user) {
      res.send(user);
    })
    .catch(next);
});
//update a prospect in the db
router.put("/users/:id", function(req, res, next) {
  User.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function() {
    User.findOne({ _id: req.params.id }).then(function(user) {
      res.send(user);
    });
  });
});

//delete a prospect in the db
router.delete("/users/:id", function(req, res, next) {
  User.findByIdAndRemove({ _id: req.params.id }).then(function(user) {
    res.send(user);
  });
});

//delete all prospects
router.delete("/users", function(req, res) {
  User.remove({}).then(function(user) {
    res.send({ user });
  });
});
module.exports = router;
