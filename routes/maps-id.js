const express = require("express");
const router = express.Router({ mergeParams: true });
const mapsQueries = require("../db/queries/maps");
const pinsQueries = require("../db/queries/pins");
const newMapQueries = require("../db/queries/new-map");

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

router.post("/", (req, res) => {
  const mapTitle = req.body.title;
  const mapImage = req.body.image;
  const mapCity = req.body.city;

  newMapQueries.addNewMap(mapTitle, mapCity, mapImage);
});

// newMapQueries
//   .addNewMap(req.params.id)
//   .then((map) => {
//     templateVar.map = map[0];
//     return newMapQueries.addNewMap(map[0].id);
//   })
//   .then((pins) => {
//     templateVar.pins = pins;
//     res.render("../views/pages/map");
//   })
//   .catch((err) => {
//     res.status(500).json({ error: err.message });
//   });
// res.render("../views/pages/map");

module.exports = router;
