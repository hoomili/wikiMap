const express = require("express");
const router = express.Router();
const { getUserWithId } = require("../db/queries/user");
const { getFavouriteMaps } = require("../db/queries/favourites");
const { getMyContributions } = require("../db/queries/contributions");

router.get("/:id", (req, res) => {
  // using encrypted cookies
  // req.session.user_id = req.params.id;
  // or using plain-text cookies
  console.log("accessed");
  const userId = req.params.id;
  res.cookie("user_id", userId);
  console.log("req.params.id", userId);

  // send the user somewhere

  getUserWithId(userId)
    .then((data) => {
      console.log("data.id", data.id);
      // return getFavouriteMaps(data.id)

      // return getFavouriteMaps(userId)
      //   .then((favourites) => {
      //     return getMyContributions(userId).then((contributions) => {
      //       const templateVars = {
      //         favourites: favourites,
      //         contributions: contributions,
      //       };
      //       console.log("templateVars", templateVars);
      //       res.render("pages/profile", templateVars);
      //     });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error 500");
    });
});

module.exports = router;
