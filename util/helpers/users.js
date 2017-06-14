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