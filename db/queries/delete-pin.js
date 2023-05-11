const db = require('../connection');




const deletePin = (pinId) => {
  const queryString = `
  DELETE FROM pins
  WHERE id = $1;
  `;
  return db
    .query(queryString, [pinId])
    .catch((error) => {
      console.log("error", error);
    });
};
module.exports = { deletePin };
