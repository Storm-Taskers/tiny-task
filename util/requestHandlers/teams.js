const helperTeams = require('../helpers/teams.js');
const helperProjects = require('../helpers/projects.js');

exports.teams = {
  createNewTeams: (req, res, isSeed) => {
    let teamData = {};
    helperTeams.addTeam(req.body.team_name, req.body.user_id, (team) => {
      teamData.team_info = team;
      const team_id = team.id;
      helperTeams.addTeamUser(req.body.user_id, team_id, (user) => {
        teamData.user_info = user;
        if (typeof isSeed === "function") {
          res.status(200).send(teamData);
          res.end();
        } else {
          console.log("seed team added");
          res.end();
        }
      });
    });
  },

  retrieveTeams: (req, res) => {
    let teamData = {};
    helperTeams.retrieveTeamById(req.params.team_id, (result) => {
      teamData.team_info = result;
      helperProjects.retrieveProjectByTeamId(req.params.team_id, (projects) => {
        teamData.projects = projects[0];
        helperTeams.retrieveTeamUsers(req.params.team_id, (users) => {
          teamData.user_info = users;
          res.send(teamData);
        });
      });
    });
  },

  updateTeams: (req, res, isSeed) => {
    let updatedTeam = {};
    helperTeams.addTeamUser(req.body.user_id, req.params.team_id, (teamUsers) => {
      helperTeams.retrieveTeamById(req.params.team_id, team => {
        updatedTeam.team_info = team;
        helperTeams.retrieveTeamUsers(req.params.team_id, (users) => {
          updatedTeam.user_info = users;
          if (typeof isSeed === "function") {
            res.status(200).send(updatedTeam);
            res.end();
          } else {
            console.log("seed team added");
            res.end();
          }
        });
      });
    });
  },

  deleteTeams: (req, res) => {
    helperTeams.deleteTeam(req.params.team_id, (message) => {
      res.status(200).send(message);
    });
  }
};