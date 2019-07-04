const express = require("express");
const router = express.Router();
const schema = require("../handler/prospecthandler");

//initialize routes
router.use(schema);

module.exports = router;
