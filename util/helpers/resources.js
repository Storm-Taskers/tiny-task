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

exports.getResourcesByTeamId = (params, callback) => {
  return models.Shared_Resources
    .findAll({
      where: {
        team_id: params.team_id
      }
    })
    .then(resources => {
      callback(resources);
    });
};

exports.deleteResources = (params, callback) => {
  models.Shared_Resources
    .destroy({
      where: {
        id: params.resources_id
      }
    })
    .then(() => {
      callback("resourceDeleted");
    });
};
