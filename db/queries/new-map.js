const db = require("../connection");

const addNewMap = function (userID, name, city, image_url, country, latitude, longitude) {
  const queryString = `
  INSERT INTO maps (creator_id, name, city, image_url, country, latitude, longitude)
  VALUES ($1, $2, $3, $4, $5, $6, $7);
  `;

  return db
    .query(queryString, [userID, name, city, image_url, country, latitude, longitude])
    .then((data) => {
      return data.rows;
    })
    .catch((error) => {
      console.log("error", error);
    });
};

module.exports = { addNewMap };
