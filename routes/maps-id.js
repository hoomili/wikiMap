const express = require("express");
const router = express.Router({ mergeParams: true });
const mapsQueries = require("../db/queries/maps");
const pinsQueries = require("../db/queries/pins");

router.get("/", (req, res) => {
  let templateVar = { ApiKey: process.env.API_KEY };
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

router.get("/new-pin", (req, res) => {
  let templateVar = { ApiKey: process.env.API_KEY, mapId: req.params.id }
  mapsQueries.getMapData(req.params.id)
    .then((map) => {
      templateVar.map = map[0];
      res.render("pages/new-pin", templateVar)
    })
});

module.exports = router;
