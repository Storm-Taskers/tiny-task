const helper = require('./helperFunctions.js');
const Promise = require('bluebird');


exports.extractProjectId = (teams, callback) => {
  Promise.all(teams.map((team => {
    return new Promise((resolve, reject) => {
      helper.retrieveProjectByTeamId(team.dataValues.team_id, (project) => {
      resolve(project);
      });
    });
  }))).then((results) => {
    let idArray = [];
    results[0].forEach((project) => {
      idArray.push(project.id);
    });
    callback(idArray);
  });
};


exports.users = {
  retrieveUser: (req, res) => {
    var userData = {};
    helper.retrieveUser(req.params.auth_token, (userProfile) => {
      userData.user_profile = userProfile;
      helper.retrieveUserTeams(req.params, (teams) => {
        this.extractProjectId(teams, (projectIds) => {
          userData.project_id = projectIds;
          res.send(userData);
        });
      });
    });
  },

  createNewUser: (req, res, isSeed) => {
    helper.addUserProfile(req.body, (user_profile) => {
      const id = user_profile.id;
      helper.addUsers(req.body, id, (err, result) => {
        if (err) {
          return res.status(500).send('server error');
        } else if (typeof isSeed === 'function') {
          res.status(200).send('user added');
          res.end();
        } else {
          console.log('seed user added');
          res.end();
        }
      });
    });
  },

  updateUser: (req, res) => {
    helper.updateUser(req.body, () => {
      res.end(JSON.stringify(res.body));
    });
    helper.updateUserProfile(req.body, () => {
      res.end(JSON.stringify(res.body));
    }).then((user) => {
      res.status(200).send('user updated');
    }).catch((err) => {
      res.status(404).send(err, 'error on updating user');
    });
  },

  deleteUser: (req, res) => {
    helper.deleteUser(req, () => {
      res.end(JSON.stringify(res.body));
    });
    helper.deleteUserProfile(req, () => {
      res.end(JSON.stringify(res.body));
    }).then((user) => {
      res.status(200).send('user deleted');
    }).catch((err) => {
      res.status(404).send(err, 'error on deleting user');
    });
  }
};

exports.teams = {
  createNewTeams: (req, res, isSeed) => {
    helper.addTeam(req.body, (team) => {
      const team_id = team.id;
      helper.addTeamUser(req.body, team_id, (result) => {
        if (typeof isSeed === 'function') {
          res.status(200).send('team added');
          res.end();
        } else {
          console.log('seed team added');
          res.end();
        }
      });
    });
  },

  retrieveTeams: (req, res) => {
    let userData = {};
    helper.retrieveUser(req.params.auth_token, (result) => {
      userData.profile = result;
      helper.retrieveProject(req.params, (projects) => {
        userData.projects = projects;
        res.send(userData);
      });
    });
  },

  updateTeams: (req, res, isSeed) => {
    let updatedTeam = {};
    helper.addTeamUser(req.body, req.body.team_id, (teamUsers) => {
      updatedTeam.team_user_info = teamUsers;
        if (typeof isSeed === 'function') {
          res.status(200).send(updatedTeam);
          res.end();
        } else {
          console.log('seed team added');
          res.end();
        }
      });
  },

  deleteTeams: (req, res) => {
    helper.deleteTeam(req, () => {
      res.end(JSON.stringify(res.body));
    }).then((team) => {
      res.status(200).send('team deleted');
    }).catch((err) => {
      res.status(404).send(err, 'error on deleting team');
    });
  }
};

exports.projects = {
  createNewProjects: (req, res, isSeed) => {
    let newProjects = {};
    helper.addProject(req.body, (project) => {
      newProjects.project_info = project;
      helper.retrieveTeamById(project.team_id, (team) => {
        newProjects.team_info = team;
        helper.retrieveTeamUsers(team[0].dataValues.id, (users) => {
          newProjects.user_info = users;
          if (typeof isSeed === 'function') {
            res.status(200).send(newProjects);
            res.end();
          } else {
            console.log('seed project added');
            res.end();
          }
        });
      });
    });
  },

  retrieveProjectById: (req, res) => {
    let returnData = {};
    helper.retrieveProjectById(req.params, (project) => {
      returnData.project_info = project;
      helper.retrieveTeamById(project.team_id, (team) => {
        returnData.team_info = team;
        helper.retrieveTeamUsers(team[0].dataValues.id, (users) => {
          returnData.user_info = users;
          helper.retrievePhasesByProjectId(returnData.project_info.id, (phases) => {
            returnData.phase_info = phases;
            res.send(returnData);
          });
        });
      });
    });
  },

  updateProjects: (req, res) => {
    let updatedProject = {};
    helper.updateProject(req.body.projectId, req.body.projectChanges, (project) => {
      updatedProject.project_info = project;
      helper.retrieveTeamById(project.team_id, (team) => {
        updatedProject.team_info = team;
        helper.retrieveTeamUsers(team[0].dataValues.id, (users) => {
          updatedProject.user_info = users;
          res.send(updatedProject);
        });
      });
    });
  },

  deleteProjects: (req, res) => {
    helper.deleteProject(req.params, (err, message) => {
      if (err) {
        return res.status(500).send(err);
      } else {
        res.send(message).end();
      }
    });
  }
};


exports.phases = {
  retrievePhasesByProjectId: (req, res) => {
    helper.retrievePhases(req.params, (phases) => {
      res.send(phases);
    });
  },

  createNewPhases: (req, res, isSeed) => {
    helper.addPhases(req, (err, result) => {
      if (err) {
        return res.status(500).send('server error');
      } else if (typeof isSeed === 'function') {
        res.status(200).send(result);
        res.end();
      } else {
        console.log('seed phase added');
        res.end();
      }
    });
  },

  deletePhases: (req, res) => {
    helper.deletePhase(req.params, (err, message) => {
      if (err) {
        return res.status(500).send(err);
      } else {
        res.send(message).end();
      }
    });
  },

  updatePhases: (req, res) => {
    helper.updatePhase(req, (err, result) => {
      if (err) {
        return res.status(500).send('server error');
      } else {
        console.log('seed phase updated');
        res.status(200).send(result);
        res.end();
      }
    });
  }
};

exports.tasks = {
  createNewTasks: (req, res, isSeed) => {
    helper.addTask(req.body, req.params.phase_id, (result) => {
      if (typeof isSeed === 'function') {
        res.status(200).send(result);
        res.end();
      } else {
        console.log('seed task added');
        res.end();
      }
    });
  },

  retrieveTasksByPhaseId: (req, res) => {
    let taskData = {};
    helper.retrieveTasksByPhaseId(req.params, (tasks) => {
      taskData.task_info = tasks;
      for(let i = 0; i < tasks.length; i++) {
        helper.retrieveTaskUser(tasks[i].id, (users) => {
          taskData.user_info.i = users;
        })
      }
      res.send(taskData);
    });

  },

  updateTasks: (req, res, isSeed) => {
    let updatedTask = {
      user_info: []
    };
    if(req.body.user_id) {
      helper.addUserTasks(req.body.user_id, req.body.stage, req.params.task_id, (addedUser) => {
        helper.retrieveTaskUser(req.params.task_id, (users) => {
          for(var i = 0; i < users.length; i++) {
            updatedTask.user_info.push(users[i].dataValues.user_id)
          }
          helper.retrieveTaskByTaskId(req.params.task_id, (task) => {
            updatedTask.task_info = task;
            if(typeof isSeed === 'function') {
              console.log('sent');
              res.status(200).send(updatedTask);
            } else {
              console.log('seed user added');
            }
          })
        })
      })
    } else {
      helper.updateTask(req.params.task_id, req.body.taskChanges, (task) => {
        if(typeof isSeed === 'function') {
          res.status(200).send(task);
        } else {
          console.log('seed task updated');
        }
      });
    };
  },
};

// exports.messages = {
//   retrieveMessages: (req, res) => {
//     helper.retrieveMessage(req, () => {
//       res.end(JSON.stringify(res.body));
//     }).then((message) => {
//       res.status(200).send('message retrieved');
//     }).catch((err) => {
//       res.status(404).send(err, 'error retrieving message');
//     });
//   },
//   createNewMessages: (req, res) => {
//     helper.addMessage(req.body, () => {
//       res.end(JSON.stringify(res.body));
//     }).then((message) => {
//       res.status(200).send('message added');
//     }).catch((err) => {
//       res.status(404).send(err, 'error on creating message');
//     });
//   },
//   updateMessages: (req, res) => {
//     helper.updateMessage(req.body, () => {
//       res.end(JSON.stringify(res.body));
//     }).then((message) => {
//       res.status(200).send('message updated');
//     }).catch((err) => {
//       res.status(404).send(err, 'error on updating message');
//     });
//   },
//   deleteMessages: (req, res) => {
//     helper.deleteMessage(req, () => {
//       res.end(JSON.stringify(res.body));
//     }).then((message) => {
//       res.status(200).send('message deleted');
//     }).catch((err) => {
//       res.status(404).send(err, 'error on deleting message');
//     });
//   }
// };

// exports.announcements = {
//   retrieveAnnouncements: (req, res) => {
//     helper.retrieveAnnouncement(req, () => {
//       res.end(JSON.stringify(res.body));
//     }).then((announcement) => {
//       res.status(200).send('announcement retrieved');
//     }).catch((err) => {
//       res.status(404).send(err, 'error retrieving announcement');
//     });
//   },
//   createNewAnnouncements: (req, res) => {
//     helper.addAnnouncement(req.body, () => {
//       res.end(JSON.stringify(res.body));
//     }).then((announcement) => {
//       res.status(200).send('announcement added');
//     }).catch((err) => {
//       res.status(404).send(err, 'error on creating announcement');
//     });
//   },
//   updateAnnouncements: (req, res) => {
//     helper.updateAnnouncement(req.body, () => {
//       res.end(JSON.stringify(res.body));
//     }).then((announcement) => {
//       res.status(200).send('announcement updated');
//     }).catch((err) => {
//       res.status(404).send(err, 'error on updating announcement');
//     });
//   },
//   deleteAnnouncements: (req, res) => {
//     helper.deleteAnnouncement(req, () => {
//       res.end(JSON.stringify(res.body));
//     }).then((announcement) => {
//       res.status(200).send('announcement deleted');
//     }).catch((err) => {
//       res.status(404).send(err, 'error on deleting announcement');
//     });
//   }
// };

// exports.resources = {
//   retrieveResources: (req, res) => {
//     helper.retrieveResource(req, () => {
//       res.end(JSON.stringify(res.body));
//     })
//       .then((resource) => {
//         res.status(200).send('resource retrieved');
//       })
//       .catch((err) => {
//         res.status(404).send(err, 'error retrieving resource');
//       });
//   },
//   createNewResources: (req, res) => {
//     helper.addResource(req.body, () => {
//       res.end(JSON.stringify(res.body));
//     })
//       .then((resource) => {
//         res.status(200).send('resource added');
//       })
//       .catch((err) => {
//         res.status(404).send(err, 'error on creating resource');
//       });
//   },
//   updateResources: (req, res) => {
//     helper.updateResource(req.body, () => {
//       res.end(JSON.stringify(res.body));
//     })
//       .then((resource) => {
//         res.status(200).send('resource updated');
//       })
//       .catch((err) => {
//         res.status(404).send(err, 'error on updating resource');
//       });
//   },
//   deleteResources: (req, res) => {

//   }
// };
