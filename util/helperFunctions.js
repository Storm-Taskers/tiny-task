const mysql = require('mysql');
const models = require('../db/models.js');
const Sequelize = require('sequelize');


models.connection = sequelize.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'tiny'
});

exports.addUser = () => {

}

exports.retrieveUser = () => {

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