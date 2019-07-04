const express = require("express");
const router = express.Router();
const ActionHandler = require("../handler/prospecthandler");

var phandler = new ActionHandler();

router.get("/", (req, res) => {
  res.send("welcome");
});

router.get("/users", (req, res) => {
  phandler.viewProspects(req, res);
});

router.get("/users/:id", (req, res) => {
  phandler.viewProspect(req, res);
});
router.post("/users", (req, res) => {
  phandler.addProspect(req, res);
});
router.put("/users/:id", (req, res) => {
  phandler.updateProspect(req, res);
});
router.delete("/users/:id", (req, res) => {
  phandler.deleteProspect(req, res);
});
router.delete("/users", (req, res) => {
  phandler.deleteProspects(req, res);
});
module.exports = router;
