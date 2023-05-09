const db = require('../connection');



const getMyContributions = function (id) {
  const queryString = `
  SELECT DISTINCT ON (maps.id)
  maps.id,
  maps.name,
  maps.image_url,
  COALESCE(pins.user_id, maps.creator_id) AS creator_or_pinner_id,
  users.name AS creator_or_pinner_name
  FROM maps
  LEFT JOIN pins ON maps.id = pins.map_id AND pins.user_id = $1
  LEFT JOIN users ON COALESCE(pins.user_id, maps.creator_id) = users.id
  WHERE maps.creator_id = $1 OR pins.user_id = $1
  ORDER BY maps.id, pins.id DESC;`


  return db
  .query(queryString, [id])
  .then(data => {
    return data.rows;
  });

};

module.exports = {getMyContributions}
