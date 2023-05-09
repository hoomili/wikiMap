const express = require("express");
const router = express.Router();
const newMapQueries = require("../db/queries/new-map");

router.get("/", (req, res) => {
  res.render("pages/new-map");
});

module.exports = router;
