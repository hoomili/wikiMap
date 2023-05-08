const express = require('express');
const router  = express.Router();
const {getFavouriteMaps} = require('../db/queries/favourites')


router.get('/:id', (req, res) => {


getFavouriteMaps(req.params.id)
  .then(data => {
    const templateVars = {
      data: data
    };
    res.render('pages/profile', templateVars)
  })

});


module.exports = router;
