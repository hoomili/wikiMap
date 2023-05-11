const db = require('../connection');


const updatePin = (data) => {
  const queryString = `
  UPDATE pins
  SET title = $1, latitude = $2, longitude = $3, description = $4, image_url = $5
  WHERE id = $6;
  `;

  return db
    .query(queryString, [data.title, data.latitude, data.longitude, data.description, data.image_url, data.pinId])
    .then((data) => {
      return data.rows;
    })
    .catch((error) => {
      console.log("error", error);
    });
};
module.exports = { updatePin };
