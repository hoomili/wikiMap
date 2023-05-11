const express = require("express");
const router = express.Router();
const { getMaps } = require("../db/queries/maps");
const { addNewMap } = require("../db/queries/new-map");
const { getFavouriteMaps } = require("../db/queries/favourites");

router.get("/", (req, res) => {
  const userId = req.cookies.user_id;

  Promise.all([getMaps(), getFavouriteMaps(userId)])
    .then(([maps, userFavourites]) => {
      const templateVars = {
        maps,
        userId,
        userFavourites,
        pageTitle: "Maps",
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
  const userID = req.cookies.user_id;

  addNewMap(userID, mapTitle, mapCity, mapImage)
    .then(() => {
      res.redirect("/maps");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error 500");
    });
});

module.exports = router;
