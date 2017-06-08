const helperUsers = require('../helpers/users.js');
const helperProjects = require('../helpers/projects.js');
const helperTeams = require('../helpers/teams.js');

exports.extractProjectId = (teams, callback) => {
  Promise.all(
    teams.map(team => {
      return new Promise((resolve, reject) => {
        helperProjects.retrieveProjectByTeamId(team.dataValues.team_id, (project) => {
          resolve(project);
        });
      });
    })
  ).then(results => {
    let idArray = [];
    results[0].forEach(project => {
      idArray.push(project.id);
    });
    callback(idArray);
  });
};

exports.users = {
  retrieveUser: (req, res) => {
    if (req.params.query) {
      console.log("placeholder for query");
    } else {
      var userData = {};
      helperUsers.retrieveUser(req.params.auth_token, (userProfile) => {
        if (userProfile.length === 0) {
          res.send(userData);
        } else {
          userData.user_profile = userProfile;
          helperTeams.retrieveUserTeams(userProfile.id, (teams) => {
            this.extractProjectId(teams, (projectIds) => {
              userData.project_id = projectIds;
              res.send(userData);
            });
          });
        }
      });
    }
  },

  searchUser: (req, res) => {
    let query_string = req.params.query_string.toLowerCase();
    helperUsers.searchUsers(query_string, (userList) => {
      res.status(200).send(userList).end();
    });
  },

  createNewUser: (req, res, isSeed) => {
    helperUsers.addUserProfile(req.body, (user_profile) => {
      const id = user_profile.id;
      helperUsers.addUsers(req.body, id, (err, result) => {
        if (err) {
          return res.status(500).send("server error");
        } else if (typeof isSeed === "function") {
          res.status(200).send("user added");
          res.end();
        } else {
          console.log("seed user added");
          res.end();
        }
      });
    });
  },

  deleteUser: (req, res) => {
    helperUsers.deleteUserProfiles(req.params.user_id, (err, result) => {
      if (err) {
        res.status(500).send("server error");
      } else {
        res.status(200).send("user deleted");
        res.end();
      }
    });
  },

  updateUser: (req, res) => {
    helperUsers.updateUserProfiles(req.params, req.body, (err, message) => {
      if (err) {
        res.status(500).send("server error");
      } else {
        res.status(200).send(message);
        res.end();
      }
    });
  },

  getUserTeams: (req, res) => {
    let userTeamData = [];
    helperTeams.getUserTeams(req.params.user_id, (results) => {
      if (results) {
        results.map(result => {
          userTeamData.push(result[0].dataValues);
        });
      }
      res.send(userTeamData);
    });
  },

  // getUserTasks: (req, res) => {
  //   let userTaskData = {};
  //   helperUsers.retrieveTaskUser(req.params.user_id, (tasks) => {

  //   });
  // },

  deleteTeamUsers: (req, res) => {
    helperUsers.deleteTeamUser(
      req.params.user_id,
      req.params.team_id,
      (err, message) => {
        if (err) {
          res.status(500).send("server error");
        } else {
          res.status(200).send(message);
          res.end();
        }
      }
    );
  },

  deleteTaskUsers: (req, res) => {
    helperUsers.deleteTaskUser(req.params.user_id, req.params.task_id, (err, message) => {
        if (err) {
          res.status(500).send("server error");
        } else {
          res.status(200).send(message);
          res.end();
        }
      }
    );
  }
};









