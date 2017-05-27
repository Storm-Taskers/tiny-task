const mysql = require('mysql');
const models = require('../db/models.js');






exports.addUsers = (body) => {
  console.log(body, 'body');
  console.log(models.Users, '--users');
  models.Users.create({
    auth_token: body.auth_token
    //user_profile_id: body.user_profile_id
  }).then((result) => {
    console.log(result);
    callback(result);
  });
};

exports.addUserProfile = (body) => {
  models.User_Profile.create({
    full_name: body.full_name,
    email: body.email,
    user_status: body.user_status,
    user_availability: body.user_availablility
  }).then((result) => {
    callback(result);
  })
}

exports.retrieveUser = () => {
  models.Users.find()

}

exports.updateUser = () => {

}

exports.deleteUser = () => {

}

exports.addTeam = () => {

}

exports.retrieveTeam = () => {

}

exports.updateTeam = () => {

}

exports.deleteTeam = () => {

}

exports.addMessage = () => {

}

exports.retrieveMessage = () => {

}

exports.deleteMessage = () => {

}

exports.addAnnouncement = () => {

}

exports.retrieveAnnouncement = () => {

}

exports.deleteAnnouncement = () => {

}

exports.addProject = () => {

}

exports.retrieveProject = () => {

}

exports.updateProject = () => {

}

exports.deleteProject = () => {

}

exports.addPhase = () => {

}

exports.retrievePhase = () => {

}

exports.updatePhase = () => {

}

exports.deletePhase = () => {

}

exports.addTask = () => {

}

exports.retrieveTask = () => {

}

exports.updateTask = () => {

}

exports.deleteTask = () => {

}

exports.newResource = () => {

}

exports.retrieveResource = () => {

}

exports.deleteResource = () => {

}