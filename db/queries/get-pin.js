const db = require('../connection');

const getPin = (pinId) => {
  return db.query(`SELECT * FROM pins WHERE id = $1;`, [pinId])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getPin };
