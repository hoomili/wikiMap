const db = require("../connection");

const addNewMap = function (userID, name, city, image_url) {
  const queryString = `
  INSERT INTO maps (creator_id, name, city, image_url, country, latitude, longitude)
  VALUES ($1, $2, $3, $4, 'Canada', '49.104431', '-122.801094');
  `;

  return db
    .query(queryString, [userID, name, city, image_url])
    .then((data) => {
      return data.rows;
    })
    .catch((error) => {
      console.log("error", error);
    });
};

module.exports = { addNewMap };
