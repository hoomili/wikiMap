const express = require("express");
const router = express.Router();
const { getFavouriteMaps } = require("../db/queries/favourites");
const { getMyContributions } = require("../db/queries/contributions");

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const userId = req.cookies.user_id;
  const pageTitle = "Profile";

  getFavouriteMaps(id)
    .then((favourites) => {
      return getMyContributions(id).then((contributions) => {
        const templateVars = {
          favourites: favourites,
          contributions: contributions,
          userId,
          pageTitle,
        };
        res.render("pages/profile", templateVars);
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error 500");
    });
});

module.exports = router;
