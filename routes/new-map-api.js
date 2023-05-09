const express = require("express");
const router = express.Router();
// const newMapQueries = require("../db/queries/new-map");

router.post("/", (req, res) => {
  res.end("Hello, World!");
  //   mapnewMapQueriesueries
  //     .getMaps()
  //     .then((newMap) => {
  //       console.log("new-map", newMap);

  //       // creator_id, name, city, country, image_url, latitude, longitude;

  //       const body = renewMapQueries.body;

  //       const user = userId;
  //       const title = body.title;
  //       const image = body.image_url;
  //       const city = body.city;
  //       const lat = "";
  //       const lng = "";

  //       const templateVars = {
  //         // user: users[userId],
  //         newMap,
  //       };
  //       console.log("newMap", newMap);
  //       res.render("pages/new-map", templateVars);
  //     })
  //     .catch((err) => {
  //       res.status(500).json({ error: err.message });
  //     });
});
