const db = require('../connection');

const getPinsData = (mapId) => {
  return db.query(`SELECT * FROM pins WHERE map_id = $1;`, [mapId])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getPinsData };
