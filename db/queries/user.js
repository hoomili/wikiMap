const db = require("../connection");

const getUserWithId = (id) => {
  return db
    .query("SELECT * FROM users WHERE id = $1;", [id])
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      return null;
    });
};

module.exports = { getUserWithId };
