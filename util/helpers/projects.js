//const mysql = require('mysql');
const models = require('../../db/models.js');

exports.retrieveProjectByTeamId = (team_id, callback) => {
  models.Projects.findAll({
      where: {
        team_id: team_id
      }
    }).then(projects => {
      callback(projects);
    });
};

exports.retrieveProjectByUserId = (params, callback) => {
  models.Users.findOne({
      where: {
        user_id: params.user_id
      }
    }).then(user => {
      return models.Projects.findAll({
        where: {
          user_id: user.user_id
        }
      });
    }).then(projects => {
      callback(projects);
    });
};

exports.retrieveProjectById = (project_id, callback) => {
  return models.Projects.findOne({
      where: {
        id: project_id
      }
    }).then(project => {
      callback(project);
    });
};

exports.addProject = (body, callback) => {
  models.Projects.create({
      project_name: body.project_name,
      user_id: body.user_id,
      team_id: body.team_id,
      phase_order: body.phase_order,
      complete: false
    }).then(result => {
      callback(result);
    });
};

exports.updateProject = (project_id, project_change, callback) => {
  models.Projects.findOne({
      where: {
        id: project_id
      }
    }).then(project => {
      project.updateAttributes({
        project_name: project_change.project_name,
        complete: project_change.complete
      });
    });
  this.retrieveProjectById(project_id, callback);
};

exports.updatePhaseOrder = (project_id, phase_order, callback) => {
  models.Projects.findOne({
    where: {
      id: project_id
    }
  }).then((project) => {
    project.updateAttributes({
      phase_order: phase_order
    }).then((result) => {
      callback('phase order updated');
    });
  });
};

exports.deleteProject = (project_id, callback) => {
  models.Projects.destroy({
      where: {
        id: project_id
      }
    }).then((result) => {
      callback(null, "deleted");
    }).catch((err) => {
      callback(err, null);
    });
};