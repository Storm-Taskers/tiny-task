const mysql = require('mysql');
const models = require('../db/models.js');

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

exports.retrieveUser = (params, callback) => {
  models.Users.findOne({
    where: {
      auth_token: params.auth_token
    }
  }).then((user) => {
    return models.User_Profile.findOne({
      where: {
        id: user.user_profile_id
      }
    });
  }).then((user_profile) => {
    callback(user_profile);
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
    userAuthToken: body.auth_token
  }).then((result) => {
    callback(null, result);
  }).catch((err) => {
    callback(err, null);
  });
};

exports.addTask = (body, callback) => {
  models.Tasks.create({
    task_name: body.task_name,
    task_status: body.task_status,
    phase_id: body.phase_id
  }).then((result) => {
    callback(result);
  });
};

exports.addUserTasks = (body, x, callback) => {
  models.User_Tasks.create({
    user_id: body.auth_token,
    task_id: x,
    stage: body.stage
  });
};

exports.addTask = (body, callback) => {
  models.Tasks.create({
    task_name: body.task_name,
    task_status: body.task_status,
    phase_id: body.phase_id
  }).then((result) => {
    callback(null, result);
  }).catch((err) => {
    callback(err, null);
  });
};

exports.addUserTasks = (body, x, callback) => {
  models.User_Tasks.create({
    user_id: body.auth_token,
    task_id: x,
    stage: body.stage
  });
};

exports.addProject = (body, callback) => {
  models.Projects.create({
    project_name: body.project_name,
    complete: body.complete,
    user_id: body.auth_token,
    team_id: body.team_id
  }).then((result) => {
    callback(null, result);
  }).catch((err) => {
    callback(err, null);
  });
};

exports.addPhases = (body, callback) => {
  models.Phases.create({
    phase_name: body.phase_name,
    phase_order: body.phase_order,
    phase_status: body.phase_status,
    phase_color: body.phase_color,
    project_id: body.project_id,
    user_id: body.auth_token,
    team_id: body.team_id
  }).then((result) => {
    callback(null, result);
  }).catch((err) => {
    callback(err, null);
  });
};

exports.retrievePhases = (params, callback) => {
  return models.Phases.findAll({
    where: {
      project_id: params.project_id
    }
  }).then((phases) => {
    callback(phases);
  });
};

exports.retrieveTasksByPhaseId = (params, callback) => {
  return models.tasks.findAll({
    where: {
      phase_id: params.phase_id
    }
  }).then((phases) => {
    callback(phases);
  });
};


exports.retrievePhases = (params, callback) => {
  return models.Phases.findAll({
    where: {
      project_id: params.project_id
    }
  }).then((phases) => {
    callback(phases);
  });
}

exports.retrieveTasksByPhaseId = (params, callback) => {
  return models.tasks.findAll({
    where: {
      phase_id: params.phase_id
    }
  }).then((phases) => {
    callback(phases);
  });
}


exports.retrieveProject = (params, callback) => {
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

exports.retrieveTeam = (params, callback) => {
  models.Team_Users.findAll({
    where: {
      user_id: params.auth_token
    }
  }).then((teamUsers) => {
    return models.Teams.findAll({
      where: {
        team_id: teamUsers.team_id
      }
    });
  }).then((projects) => {
    callback(projects);
  });
};



// exports.updateUser = () => {

// }

// exports.deleteUser = () => {

// }



// exports.updateTeam = () => {

// }

// exports.deleteTeam = () => {

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



// exports.updateProject = () => {

// }

// exports.deleteProject = () => {

// }



// exports.updatePhase = () => {

// }

// exports.deletePhase = () => {

// }


// exports.retrieveTask = () => {

// }

// exports.updateTask = () => {

// }

// exports.deleteTask = () => {

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