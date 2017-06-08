//const mysql = require('mysql');
const models = require('../../db/models.js');

exports.retrievePhasesByProjectId = (project_id, callback) => {
  return models.Phases.findAll({
      where: {
        project_id: project_id
      }
    }).then(phases => {
      callback(phases);
    });
};

exports.addPhases = (req, callback) => {
  models.Phases.create({
      project_id: req.params.project_id,
      phase_name: req.body.phase_name,
      phase_order: 1,
      phase_status: "In Progress",
      phase_color: "red"
    }).then(phase => {
      callback(null, phase.dataValues);
    }).catch(err => {
      callback(err, null);
    });
};

exports.updatePhase = (req, callback) => {
  models.Phases.findOne({
      where: {
        id: req.params.phase_id
      }
    }).then(phase => {
      phase.updateAttributes(req.body)
        .then(phase => {
          callback(null, phase.dataValues);
        }).catch(err => {
          callback(err, null);
        });
    });
};


exports.deletePhase = (params, callback) => {
  models.Phases.destroy({
      where: {
        id: params.phase_id
      }
    }).then(result => {
      callback(null, "deleted");
    }).catch(err => {
      callback(err, null);
    });
};