const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const userId = req.cookies.user_id;
  res.clearCookie("user_id");

  res.redirect("/maps");
});

module.exports = router;
