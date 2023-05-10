const db = require("../connection");

const addNewMap = function (name, city, image_url) {
  const queryString = `
  INSERT INTO maps (name, city, image_url, country, latitude, longitude)
  VALUES ($1, $2, $3, 'Canada', '49.104431', '-122.801094');
  `;

  return db
    .query(queryString, [name, city, image_url])
    .then((data) => {
      return data.rows;
    })
    .catch((error) => {
      console.log("error", error);
    });
};

module.exports = { addNewMap };
