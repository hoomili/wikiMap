const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.redirect("/");
});

module.exports = router;
