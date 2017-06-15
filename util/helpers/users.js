//const mysql = require('mysql');
const models = require('../../db/models.js');

exports.retrieveUser = (authToken, callback) => {
  models.Users.findOne({
    where: {
      auth_token: authToken
    }
  }).then(user => {
    if (user === null) {
      callback(user);
    } else {
      return models.User_Profile.findOne({
        where: {
          id: user.user_profile_id
        }
      }).then(user_profile => {
          callback(user_profile);
      });
    }
  });
};

exports.retrieveProfile = (userId, callback) => {
  models.User_Profile.findOne({
    where: {
      id: userId
    }
  }).then(user_profile => {
    callback(user_profile);
  });
};

exports.addUsers = (token, id, callback) => {
  models.Users.create({
      auth_token: token,
      user_profile_id: id
    }).then((result) => {
      callback(null, result);
    }).catch((err) => {
      callback(err, null);
    });
};

exports.addUserProfile = (authInfo, callback) => {
  models.User_Profile.create({
      full_name: authInfo.name,
      email: authInfo.nickname,
      user_status: 'Newly Created Account!',
      user_availability: 'Available'
    }).then((result) => {
      callback(result);
    });
};

exports.searchUsers = (queryString, callback) => {
  let numToSplit = queryString.length;
  let result = [];
  models.User_Profile.findAll().then((users) => {
    users.forEach((user) => {
      let toSearch = user.dataValues.full_name.slice(0, numToSplit).toLowerCase();
      if(toSearch === queryString) {
        result.push(user);
      }
    });
  })
  .then((something) => {
      callback(result);
  });

};

exports.deleteUserProfiles = (user_id, callback) => {
  models.Users.findOne({
    where: {
      user_profile_id: user_id
    }
  }).then(user => {
    models.User_Profile.destroy({
      where: {
        id: user.dataValues.user_profile_id
      }
    }).then(result => {
      callback(null, "deleted");
    }).catch(err => {
      callback(err, null);
    });
  });
};

exports.updateUserProfiles = (params, body, callback) => {
  models.Users.findOne({
      where: {
        user_profile_id: params.user_id
      }
    }).then(user => {
      models.User_Profile.findOne({
        where: {
          id: user.dataValues.user_profile_id
        }
      }).then(userProfile => {
        userProfile.updateAttributes(body)
          .then(userProfile => {
            callback(null, userProfile.dataValues);
          }).catch(err => {
            callback(err, null);
        });
      });
    });
};