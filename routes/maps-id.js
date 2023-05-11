const express = require("express");
const router = express.Router({ mergeParams: true });
const mapsQueries = require("../db/queries/maps");
const pinsQueries = require("../db/queries/pins");
const newPinsQueries = require("../db/queries/new-pin");

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
      pageTitle = map[0].name;
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
  const userId = req.cookies.user_id;
  let templateVar = {
    ApiKey: process.env.API_KEY,
    mapId: req.params.id,
    userId,
  };
  mapsQueries.getMapData(req.params.id).then((map) => {
    templateVar.map = map[0];
    res.render("pages/new-pin", templateVar);
  });
});

router.post("/", (req, res) => {
  const data = {
    map_id: req.params.id,
    user_id: req.cookies.user_id,
    title: req.body.title,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    description: req.body.description,
    image_url: req.body.image,
  };

  newPinsQueries
    .addNewPin(
      data.user_id,
      data.map_id,
      data.title,
      data.latitude,
      data.longitude,
      data.description,
      data.image_url
    )
    .then(() => {
      res.redirect(`/maps/${req.params.id}`);
    });

  console.log(data);
});

module.exports = router;
