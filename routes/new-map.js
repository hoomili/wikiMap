const express = require("express");
const router = express.Router();
const newMapQueries = require("../db/queries/new-map");

router.get("/", (req, res) => {
  const userId = req.cookies.user_id;
  const pageTitle = "Create New Map";
  const templateVars = {
    pageTitle,
    userId,
  };

  res.render("pages/new-map", templateVars);
});

module.exports = router;
