const express = require("express");
const router = express.Router();
const userQueries = require("../db/queries/maps");

router.get("/maps", (req, res) => {
  userQueries
    .getMaps()
    .then((maps) => {
      //   res.json({ maps });
      res.render("maps");
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
