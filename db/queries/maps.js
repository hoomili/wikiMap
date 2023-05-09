const db = require('../connection');

const getMapData = (mapId) => {
  return db.query(`SELECT * FROM maps WHERE id = $1;`, [mapId])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getMapData };
const db = require("../connection");

const getMaps = () => {
  return db.query("SELECT * FROM maps;").then((data) => {
    return data.rows;
  });
};

module.exports = { getMaps };
