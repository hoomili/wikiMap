const db = require("../connection");

const getFavouriteMaps = function (id) {
  const queryString = `
  SELECT favourite_maps.id, favourite_maps.user_id, favourite_maps.map_id, maps.image_url, maps.name, users.username
  FROM favourite_maps
  JOIN users ON user_id = users.id
  JOIN maps ON map_id = maps.id
  WHERE user_id = $1`;

  return db.query(queryString, [id]).then((data) => {
    return data.rows;
  });
};
// const getMyContributions = function (id) {
//   const queryString = `
//   SELECT id, creator_id
//   FROM maps
//   WHERE id = creator_id`

//   return db
//   .query(query, [id, creator_id, maps.id])
//   .then(data => {
//     return data.rows;
//   });

// };

module.exports = { getFavouriteMaps };
