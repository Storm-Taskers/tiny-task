//const mysql = require('mysql');
const models = require('../../db/models.js');

exports.retrieveTeamById = (team_id, callback) => {
  models.Teams.findAll({
      where: {
        id: team_id
      }
    }).then((team) => {
      callback(team);
    });
};

exports.addTeam = (team_name, user_id, callback) => {
  models.Teams.create({
      team_name: team_name,
      user_id: user_id
    }).then((result) => {
      callback(result, user_id);
    });
};

exports.addTeamUser = (user_id, team_id, callback) => {
  models.Team_Users.create({
      team_id: team_id,
      user_id: user_id
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
      return Promise.all(
        users.map(user => {
          return models.User_Profile.findAll({
            where: {
              id: user.dataValues.user_id
            }
          });
        })
      ).then(userProfiles => {
        callback(userProfiles.map(user => user[0]));
      });
    });
};

exports.retrieveUserTeams = (user_id, callback) => {
  models.Team_Users.findAll({
      where: {
        user_id: user_id
      }
    }).then((teams) => {
      callback(teams);
    });
};

exports.getUserTeams = (user_id, callback) => {
  models.Team_Users.findAll({
      where: {
        user_id: user_id
      }
    }).then((userTeams) => {
      return Promise.all(
        userTeams.map(userTeam => {
          return models.Teams.findAll({
            where: {
              id: userTeam.dataValues.team_id
            }
          });
        })
      ).then((Teams) => {
        callback(Teams);
      });
    });
};

exports.deleteTeamUser = (user_id, team_id, callback) => {
  models.Team_Users.destroy({
    where: {
      user_id: user_id,
      team_id: team_id
    }
  }).then((result) => {
      callback("user deleted from team");
  });
};

exports.deleteTeam = (team_id, callback) => {
  models.Teams.destroy({
      where: {
        id: team_id
      }
    }).then(() => {
      callback("team deleted");
    });
};