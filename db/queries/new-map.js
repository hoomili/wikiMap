const db = require("../connection");

// creator_id, name, city, country, image_url, latitude, longitude;

const addNewMap = function (id) {
  const queryString = `
  INSERT INTO maps (creator_id, name, city, country, image_url, latitude, longitude)
  VALUES (1, 'Test Table', 'Surrey', 'Canada', 'https://images.unsplash.com/photo-1512546321483-c0468b7b8a95', '49.104431', '-122.801094');
  `;

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

module.exports = { addNewMap };
