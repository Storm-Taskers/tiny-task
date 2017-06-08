const mysql = require("mysql");
const models = require("../db/models.js");

// exports.retrieveUser = (authToken, callback) => {
//   models.Users
//     .findOne({
//       where: {
//         auth_token: authToken
//       }
//     })
//     .then(user => {
//       if (user === null) {
//         console.log("try this");
//         callback(user);
//       } else {
//         return models.User_Profile
//           .findOne({
//             where: {
//               id: user.user_profile_id
//             }
//           })
//           .then(user_profile => {
//             callback(user_profile);
//           });
//       }
//     });
// };

// exports.addUsers = (body, id, callback) => {
//   models.Users
//     .create({
//       auth_token: body.auth_token,
//       user_profile_id: id
//     })
//     .then(result => {
//       callback(null, result);
//     })
//     .catch(err => {
//       callback(err, null);
//     });
// };

// exports.addUserProfile = (body, callback) => {
//   models.User_Profile
//     .create({
//       full_name: body.full_name,
//       email: body.email,
//       user_status: body.user_status,
//       user_availability: body.user_availability
//     })
//     .then(result => {
//       callback(result);
//     });
// };

// exports.deleteUserProfiles = (user_id, callback) => {
//   models.Users
//     .findOne({
//       where: {
//         user_profile_id: user_id
//       }
//     })
//     .then(user => {
//       models.User_Profile
//         .destroy({
//           where: {
//             id: user.dataValues.user_profile_id
//           }
//         })
//         .then(result => {
//           callback(null, "deleted");
//         })
//         .catch(err => {
//           callback(err, null);
//         });
//     });
// };

// exports.updateUserProfiles = (params, body, callback) => {
//   models.Users
//     .findOne({
//       where: {
//         user_profile_id: params.user_id
//       }
//     })
//     .then(user => {
//       models.User_Profile
//         .findOne({
//           where: {
//             id: user.dataValues.user_profile_id
//           }
//         })
//         .then(userProfile => {
//           userProfile
//             .updateAttributes(body)
//             .then(userProfile => {
//               callback(null, userProfile.dataValues);
//             })
//             .catch(err => {
//               callback(err, null);
//             });
//         });
//     });
// };

// exports.retrieveTeamById = (team_id, callback) => {
//   models.Teams
//     .findAll({
//       where: {
//         id: team_id
//       }
//     })
//     .then(team => {
//       callback(team);
//     });
// };

// exports.addTeam = (team_name, user_id, callback) => {
//   models.Teams
//     .create({
//       team_name: team_name,
//       user_id: user_id
//     })
//     .then(result => {
//       callback(result);
//     });
// };

// exports.addTeamUser = (user_id, team_id, callback) => {
//   models.Team_Users
//     .create({
//       team_id: team_id,
//       user_id: user_id
//     })
//     .then(result => {
//       callback(result);
//     });
// };

// exports.retrieveTeamUsers = (team_id, callback) => {
//   models.Team_Users
//     .findAll({
//       where: {
//         team_id: team_id
//       }
//     })
//     .then(users => {
//       return Promise.all(
//         users.map(user => {
//           return models.User_Profile.findAll({
//             where: {
//               id: user.dataValues.user_id
//             }
//           });
//         })
//       ).then(userProfiles => {
//         callback(userProfiles.map(user => user[0]));
//       });
//     });
// };

// exports.retrieveUserTeams = (user_id, callback) => {
//   console.log(user_id, "user_id");
//   models.Team_Users
//     .findAll({
//       where: {
//         user_id: user_id
//       }
//     })
//     .then(teams => {
//       callback(teams);
//     });
// };

// exports.getUserTeams = (user_id, callback) => {
//   models.Team_Users
//     .findAll({
//       where: {
//         user_id: user_id
//       }
//     })
//     .then(userTeams => {
//       return Promise.all(
//         userTeams.map(userTeam => {
//           return models.Teams.findAll({
//             where: {
//               id: userTeam.dataValues.team_id
//             }
//           });
//         })
//       ).then(Teams => {
//         console.log(Teams, "in helpers");
//         callback(Teams);
//       });
//     });
// };

// exports.deleteTeamUser = (user_id, team_id, callback) => {
//   models.Team_Users
//     .destroy({
//       where: {
//         user_id: user_id,
//         team_id: team_id
//       }
//     })
//     .then(result => {
//       callback(null, "user deleted from team");
//     })
//     .catch(err => {
//       callback(err, null);
//     });
// };

// exports.deleteTeam = (team_id, callback) => {
//   models.Teams
//     .destroy({
//       where: {
//         id: team_id
//       }
//     })
//     .then(() => {
//       callback("team deleted");
//     });
// };

// exports.retrieveProjectByTeamId = (team_id, callback) => {
//   models.Projects
//     .findAll({
//       where: {
//         team_id: team_id
//       }
//     })
//     .then(projects => {
//       callback(projects);
//     });
// };

// exports.retrieveProjectByUserId = (params, callback) => {
//   models.Users
//     .findOne({
//       where: {
//         user_id: params.user_id
//       }
//     })
//     .then(user => {
//       return models.Projects.findAll({
//         where: {
//           user_id: user.user_id
//         }
//       });
//     })
//     .then(projects => {
//       callback(projects);
//     });
// };

// exports.retrieveProjectById = (project_id, callback) => {
//   return models.Projects
//     .findOne({
//       where: {
//         id: project_id
//       }
//     })
//     .then(project => {
//       callback(project);
//     });
// };

// exports.addProject = (body, callback) => {
//   models.Projects
//     .create({
//       project_name: body.project_name,
//       user_id: body.user_id,
//       team_id: body.team_id,
//       complete: false
//     })
//     .then(result => {
//       callback(result);
//     });
// };

// exports.updateProject = (project_id, project_change, callback) => {
//   models.Projects
//     .findOne({
//       where: {
//         id: project_id
//       }
//     }).then(project => {
//       project.updateAttributes({
//         project_name: project_change.project_name,
//         complete: project_change.complete
//       });
//     });
//   this.retrieveProjectById({ project_id: project_id }, callback);
// };

// exports.updatePhaseOrder = (project_id, phase_order, callback) => {
//   models.Projects.findOne({
//     where: {
//       id: project_id
//     }
//   }).then((project) => {
//     project.updateAttributes({
//       phase_order: phase_order
//     }).then((result) => {
//       callback('phase order updated');
//     })
//   });
// };

// exports.deleteProject = (project_id, callback) => {
//   models.Projects
//     .destroy({
//       where: {
//         id: project_id
//       }
//     })
//     .then(result => {
//       callback(null, "deleted");
//     })
//     .catch(err => {
//       callback(err, null);
//     });
// };

// exports.retrievePhasesByProjectId = (project_id, callback) => {
//   return models.Phases
//     .findAll({
//       where: {
//         project_id: project_id
//       }
//     })
//     .then(phases => {
//       callback(phases);
//     });
// };

// exports.addPhases = (req, callback) => {
//   models.Phases
//     .create({
//       project_id: req.params.project_id,
//       phase_name: req.body.phase_name,
//       phase_order: 1,
//       phase_status: "In Progress",
//       phase_color: "red"
//     })
//     .then(phase => {
//       callback(null, phase.dataValues);
//     })
//     .catch(err => {
//       callback(err, null);
//     });
// };

// exports.updatePhase = (req, callback) => {
//   models.Phases
//     .findOne({
//       where: {
//         id: req.params.phase_id
//       }
//     })
//     .then(phase => {
//       phase
//         .updateAttributes(req.body)
//         .then(phase => {
//           callback(null, phase.dataValues);
//         })
//         .catch(err => {
//           callback(err, null);
//         });
//     });
// };


// exports.deletePhase = (params, callback) => {
//   models.Phases
//     .destroy({
//       where: {
//         id: params.phase_id
//       }
//     })
//     .then(result => {
//       callback(null, "deleted");
//     })
//     .catch(err => {
//       callback(err, null);
//     });
// };

// exports.retrieveTasksByPhaseId = (params, callback) => {
//   return models.Tasks
//     .findAll({
//       where: {
//         phase_id: params.phase_id
//       }
//     })
//     .then(phases => {
//       callback(phases);
//     });
// };

// exports.retrieveTaskByTaskId = (task_id, callback) => {
//   return models.Tasks
//     .findOne({
//       where: {
//         id: task_id
//       }
//     })
//     .then(task => {
//       callback(task);
//     });
// };

// retrieveTasksByUserId = (user_id, callback) => {
//   return models.User_Tasks
//     .findAll({
//       where: {
//         user_id: user_id
//       }
//     })
//     .then(task => {
//       callback(task);
//     });
// };

// exports.retrieveTaskUser = (task_id, callback) => {
//   models.User_Tasks
//     .findAll({
//       where: {
//         task_id: task_id
//       }
//     })
//     .then(users => {
//       callback(users);
//     });
// };

// exports.addUserTasks = (user_id, stage, task_id, callback) => {
//   models.User_Tasks
//     .create({
//       user_id: user_id,
//       task_id: task_id,
//       stage: stage
//     })
//     .then(results => {
//       callback(results);
//     });
// };

// exports.addTask = (body, phase_id, callback) => {
//   console.log(body.task_name);
//   models.Tasks
//     .create({
//       task_name: body.task_name,
//       task_status: body.task_status,
//       task_color: body.task_color,
//       phase_id: phase_id
//     })
//     .then(result => {
//       callback(result);
//     });
// };

// exports.updateTask = (task_id, changes, callback) => {
//   let taskId = task_id;
//   console.log(changes);
//   models.Tasks
//     .findOne({
//       where: {
//         id: taskId
//       }
//     })
//     .then(task => {
//       task
//         .updateAttributes({
//           task_name: changes.task_name,
//           task_status: changes.task_status,
//           task_color: changes.task_color,
//           phase_id: changes.phase_id
//         })
//         .then(task => {
//           models.Tasks
//             .findOne({
//               where: {
//                 id: taskId
//               }
//             })
//             .then(task => {
//               callback(task);
//             });
//         });
//     });
// };

// exports.deleteTaskUser = (user_id, task_id, callback) => {
//   models.User_Tasks
//     .destroy({
//       where: {
//         user_id: user_id,
//         task_id: task_id
//       }
//     })
//     .then(result => {
//       callback(null, "user deleted from task");
//     })
//     .catch(err => {
//       callback(err, null);
//     });
// };

// exports.deleteTask = (task_id, callback) => {
//   models.Tasks
//     .destroy({
//       where: {
//         id: task_id
//       }
//     })
//     .then(() => {
//       callback("taskDeleted");
//     });
// };

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

// exports.addAnnouncement = (req, callback) => {
//   models.Announcements
//     .create({
//       announcement: req.body.announcement,
//       user_id: req.body.user_id,
//       team_id: req.body.team_id
//     })
//     .then(announcement => {
//       callback(null, announcement.dataValues);
//     })
//     .catch(err => {
//       callback(err, null);
//     });
// };

// exports.getAnnouncementsByTeamId = (params, callback) => {
//   return models.Announcements
//     .findAll({
//       where: {
//         team_id: params.team_id
//       }
//     })
//     .then(announcements => {
//       callback(announcements);
//     });
// };

// exports.updateAnnouncement = (req, callback) => {
//   models.Announcements
//     .findOne({
//       where: {
//         id: req.params.announcement_id
//       }
//     })
//     .then(announcement => {
//       announcement
//         .updateAttributes(req.body)
//         .then(announcement => {
//           callback(null, announcement.dataValues);
//         })
//         .catch(err => {
//           callback(err, null);
//         });
//     });
// };

// exports.deleteAnnouncement = (params, callback) => {
//   models.Announcements
//     .destroy({
//       where: {
//         id: params.announcement_id
//       }
//     })
//     .then(() => {
//       callback("announcementDeleted");
//     });
// };

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
