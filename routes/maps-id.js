const express = require("express");
const router = express.Router({ mergeParams: true });
const mapsQueries = require("../db/queries/maps");
const pinsQueries = require("../db/queries/pins");

router.get("/", (req, res) => {
  const userId = req.cookies.user_id;
  const templateVar = {
    ApiKey: process.env.API_KEY,
    userId,
  };
  mapsQueries
    .getMapData(req.params.id)
    .then((map) => {
      templateVar.map = map[0];
      return pinsQueries.getPinsData(map[0].id);
    })
    .then((pins) => {
      templateVar.pins = pins;
      res.render("../views/pages/map", templateVar);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
