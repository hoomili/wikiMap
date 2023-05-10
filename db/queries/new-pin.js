const db = require("../connection");

const addNewPin = function (user_id, map_id, title, latitude, longitude, description, image_url) {
  const queryString = `
  INSERT INTO pins (user_id, map_id, title, latitude, longitude, description, image_url)
  VALUES ($1, $2, $3, $4, $5, $6, $7);
  `;

  return db
    .query(queryString, [user_id, map_id, title, latitude, longitude, description, image_url])
    .then((data) => {
      return data.rows;
    })
    .catch((error) => {
      console.log("error", error);
    });
};

module.exports = { addNewPin };
