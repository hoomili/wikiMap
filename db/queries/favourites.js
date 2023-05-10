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

const addFavouriteMap = function(userID, mapID) {
  console.log(`Adding map ${mapID} to user ${userID}'s favorites.`);

  const queryString = `
    INSERT INTO favourite_maps (user_id, map_id)
    VALUES ($1, $2);
  `;

  return db
    .query(queryString, [userID, mapID])
    .then((data) => {
      console.log(`Map ${mapID} added to user ${userID}'s favorites.`);
      return data.rows;
    })
    .catch((error) => {
      console.log("Error adding map to favorites:", error);
    });
};

const removeFavouriteMap = function(userID, mapID) {
  console.log(`Removing map ${mapID} from user ${userID}'s favorites.`);

  const queryString = `
    DELETE FROM favourite_maps
    WHERE user_id = $1 AND map_id = $2
  `;

  return db
    .query(queryString, [userID, mapID])
    .then((data) => {
      console.log(`Map ${mapID} removed from user ${userID}'s favorites.`);
      return data.rows;
    })
    .catch((error) => {
      console.log("Error removing map from favorites:", error);
    });
};



module.exports = {getFavouriteMaps, addFavouriteMap, removeFavouriteMap}
