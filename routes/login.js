const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
  // using encrypted cookies
  // req.session.user_id = req.params.id;
  // or using plain-text cookies
  console.log("accessed");
  res.cookie("user_id", req.params.id);
  console.log("req.params.id", req.params.id);

  // send the user somewhere
  res.redirect(`/profiles/${req.params.id}`);
});

module.exports = router;
