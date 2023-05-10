const express = require("express");
const router = express.Router();
const mapQueries = require("../db/queries/maps");
const newMapQueries = require("../db/queries/new-map");

router.get("/", (req, res) => {
  mapQueries
    .getMaps()
    .then((maps) => {
      const templateVars = {
        maps,
        userId: req.cookies.user_id,
      };
      res.render("pages/maps", templateVars);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post("/", (req, res) => {
  const mapTitle = req.body.title;
  const mapImage = req.body.image;
  const mapCity = req.body.city;

  newMapQueries
    .addNewMap(mapTitle, mapCity, mapImage)
    .then(() => {
      res.redirect("/maps");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error 500");
    });
});

module.exports = router;
