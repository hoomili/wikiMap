const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
  const userId = req.params.id;
  res.cookie("user_id", userId);

  // let user = req.cookies.user_id;
  res.redirect(`/profiles/${userId}`);
});

module.exports = router;
