//const mysql = require('mysql');
const models = require("../../db/models.js");

exports.addResource = (req, callback) => {
  models.Shared_Resources
    .create({
      URL: req.body.URL,
      notes: req.body.notes,
      user_id: req.body.user_id,
      team_id: req.body.team_id
    })
    .then(result => {
      callback(result);
    });
};

// exports.retrieveResources = () => {

// }

// exports.deleteResources = () => {

// }
