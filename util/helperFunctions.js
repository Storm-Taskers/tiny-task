const mysql = require('mysql');
const models = require('../db/models.js');




exports.retrieveUser = (userId, callback) => {
  console.log(userId, 'userId');
  models.Users.findOne({
    where: {
      auth_token: userId
    }
  }).then((user) => {
    console.log(user, 'should be userProfile')
    return models.User_Profile.findOne({
      where: {
        id: user.user_profile_id
      }
    });
  }).then((user_profile) => {
    callback(user_profile);
  });
};

exports.addUsers = (body, id, callback) => {
  models.Users.create({
    auth_token: body.auth_token,
    user_profile_id: id
  }).then((result) => {
    callback(null, result);
  }).catch((err) => {
    callback(err, null);
  });
};

exports.addUserProfile = (body, callback) => {
  models.User_Profile.create({
    full_name: body.full_name,
    email: body.email,
    user_status: body.user_status,
    user_availability: body.user_availability
  }).then((result) => {
    callback(result);
  });
};

// exports.updateUser = () => {

// }

// exports.deleteUser = () => {

// }


exports.retrieveTeamById = (team_id, callback) => {
  models.Teams.findAll({
    where: {
      id: team_id
    }
  }).then((team) => {
    callback(team);
  });
};

exports.addTeam = (body, callback) => {
  models.Teams.create({
    team_name: body.team_name,
    user_id: body.auth_token
  }).then((result) => {
    callback(result);
  });
};

exports.addTeamUser = (body, team_id, callback) => {
  models.Team_Users.create({
    team_id: team_id,
    user_id: body.auth_token
  }).then((result) => {
    callback(result);
  });
};

exports.retrieveTeamUsers = (team_id, callback) => {
  models.Team_Users.findAll({
    where: {
      team_id: team_id
    }
  }).then((users) => {
    return Promise.all(users.map((user) => {
      return models.User_Profile.findAll({
        where: {
          id: user.dataValues.id
        }
      });
    })).then((userProfiles) => {
      callback(userProfiles);
    });
  });
};

exports.retrieveUserTeams = (params, callback) => {
  models.Team_Users.findAll({
    where: {
      user_id: params.auth_token
    }
  }).then((teams) => {
    callback(teams);
  });
};

// exports.updateTeam = () => {

// }

// exports.deleteTeam = () => {

// }

exports.retrieveProjectByTeamId = (team_id, callback) => {
  models.Projects.findAll({
    where: {
      team_id: team_id
    }
  }).then((projects) => {
    callback(projects);
  });
};

exports.retrieveProjectByUserId = (params, callback) => {
  models.Users.findOne({
    where: {
      auth_token: params.auth_token
    }
  }).then((user) => {
    return models.Projects.findAll({
      where: {
        user_id: user.auth_token
      }
    });
  }).then((projects) => {
    callback(projects);
  });
};

exports.retrieveProjectById = (params, callback) => {
  return models.Projects.findOne({
    where: {
      id: params.project_id
    }
  }).then((project) => {
    callback(project);
  });
};

exports.addProject = (body, callback) => {
  models.Projects.create({
    project_name: body.project_name,
    user_id: body.user_id,
    team_id: body.team_id,
    complete: false
  }).then((result) => {
    callback(result);
  });
};


exports.updateProject = (project_id, project_change, callback) => {
  models.Projects.findOne({
    where: {
      id: project_id
    }
  }).then((project) => {
    project.updateAttributes({
      project_name: project_change.project_name,
      complete: project_change.complete
    });
  });
  this.retrieveProjectById({project_id: project_id}, callback);
};

exports.deleteProject = (params, callback) => {
  models.Projects.destroy({
    where: {
      id: params.project_id
    }
  }).then((result) => {
    callback(null, 'deleted');
  }).catch((err) => {
    callback(err, null);
  });
};

exports.retrievePhasesByProjectId = (project_id, callback)=> {
  return models.Phases.findAll({
    where: {
      project_id: project_id
    }
  }).then((phases) => {
    callback(phases);
  });
};

exports.addPhases = (req, callback) => {
  models.Phases.create({
    project_id: req.params.project_id,
    phase_name: req.body.phase_name,
    phase_order: req.body.phase_order,
    phase_status: req.body.phase_status,
    phase_color: req.body.phase_color
  }).then((phase) => {
    callback(null, phase.dataValues);
  }).catch((err) => {
    callback(err, null);
  });
};

exports.updatePhase = (req, callback) => {
  models.Phases.findOne({
    where: {
      id: req.params.phase_id
    }
  }).then((phase) => {
    phase.updateAttributes({
      phase_name: req.body.phase_name,
      phase_order: req.body.phase_order,
      phase_status: req.body.phase_status,
      phase_color: req.body.phase_color
    }).then((phase) => {
      callback(null, phase.dataValues);
    }).catch((err) => {
      callback(err, null);
    });
  });
};

exports.deletePhase = (params, callback) => {
  models.Phases.destroy({
    where: {
      id: params.phase_id
    }
  }).then((result) => {
    callback(null, 'deleted');
  }).catch((err) => {
    callback(err, null);
  });
};


exports.retrieveTasksByPhaseId = (params, callback) => {
  return models.Tasks.findAll({
    where: {
      phase_id: params.phase_id
    }
  }).then((phases) => {
    callback(phases);
  });
};

exports.retrieveTaskByTaskId = (task_id, callback) => {
  return models.Tasks.findOne({
    where: {
      id: task_id
    }
  }).then((task) => {
    callback(task);
  })
}

exports.retrieveTaskUser = (task_id, callback) => {
  models.User_Tasks.findAll({
    where: {
      task_id: task_id
    }
  }).then((users) => {
    callback(users);
  });
};

exports.addUserTasks = (user_id, stage, task_id, callback) => {
  models.User_Tasks.create({
    user_id: user_id,
    task_id: task_id,
    stage: stage
  }).then((results) => {
    callback(results);
  });
};

exports.addTask = (body, phase_id, callback) => {
  models.Tasks.create({
    task_name: body.task_name,
    task_status: body.task_status,
    task_color: body.task_color,
    phase_id: phase_id
  }).then((result) => {
    callback(result);
  });
};

exports.updateTask = (task_id, changes, callback) => {
  let taskId = task_id;
  console.log(changes)
  models.Tasks.findOne({
    where: {
      id: taskId
    }
  }).then((task) => {
    task.updateAttributes({
      task_name: changes.task_name,
      task_status: changes.task_status,
      task_color: changes.task_color,
      phase_id: changes.phase_id
    }).then((task) => {
      models.Tasks.findOne({
        where: {
        id: taskId
        }
      }).then((task) => {
      callback(task);
      });
    });
  });
};

// exports.deleteTask = () => {

// }




// exports.addMessage = () => {
//   models.Messages.create({
//     message: body.message
//   }).then((result) => {
//     callback(result);
//   });
// }

// exports.retrieveMessage = () => {

// }

// exports.deleteMessage = () => {

// }

// exports.addAnnouncement = () => {
//   models.Announcements.create({
//     announcement: body.announcement
//   }).then((result) => {
//     callback(result);
//   });
// }

// exports.retrieveAnnouncement = () => {

// }

// exports.deleteAnnouncement = () => {

// }

// exports.createNewResources = () => {
//   models.Resources.create({
//     resource: body.resource,
//     type: body.type
//   }).then((result) => {
//     callback(result);
//   });
// }

// exports.retrieveResources = () => {

// }

// exports.deleteResources = () => {

// }