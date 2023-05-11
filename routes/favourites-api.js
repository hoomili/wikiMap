const express = require("express");
const router = express.Router();
const  {addFavouriteMap, removeFavouriteMap}  = require("../db/queries/favourites");

router.post("/", (req, res) => {
  console.log('THIS IS req.body:', req.body)
  const userID = req.cookies.user_id;
  const mapID = req.body.mapID;
  const isFavourited = req.body.isFavourited

  console.log("userID:", userID)
  console.log("mapID:", mapID)
  console.log("isFavourited:", isFavourited)

  if (isFavourited === "false") {
    removeFavouriteMap(userID, mapID)
      .then(() => {
        res.sendStatus(200);
        console.log(`Map ${mapID}, removed from user ${userID}'s favorites.`);
      })
      .catch((err) => {
        console.error("Error removing map from favorites:", err);
        res.sendStatus(500);
      });
  } else {
    addFavouriteMap(userID, mapID)
      .then(() => {
        res.sendStatus(200);
        console.log(`Map ${mapID}, added to user ${userID}'s favorites.`);
      })
      .catch((err) => {
        console.error("Error adding map to favorites:", err);
        res.sendStatus(500);
      });
  }
});
module.exports = router;
