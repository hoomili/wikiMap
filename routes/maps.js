const express = require("express");
const router = express.Router();
const mapQueries = require("../db/queries/maps");

router.get("/", (req, res) => {
  mapQueries
    .getMaps()
    .then((maps) => {
      res.json({ maps });
      res.send("This is maps page");
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
