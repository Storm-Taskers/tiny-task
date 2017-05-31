const Chance = require('chance');
const models = require('./db/models.js');
const helpers = require('./util/helperFunctions.js');

const connection = models.connection;

const chance = new Chance();

//delete all old data
const seed = () => {
  connection.queryInterface.dropTable('announcements')
  .then(() => {
    connection.queryInterface.dropTable('messages');
  }).then(() => {
    connection.queryInterface.dropTable('shared_resources');
  }).then(() => {
    connection.queryInterface.dropTable('team_colors');
  }).then(() => {
    connection.queryInterface.dropTable('team_users');
  }).then(() => {
    connection.queryInterface.dropTable('users');
  }).then(() => {
    connection.queryInterface.dropTable('tasks');
  }).then(() => {
    connection.queryInterface.dropTable('user_profiles');
  }).then(() => {
    connection.queryInterface.dropTable('phases');
  }).then(() => {
    connection.queryInterface.dropTable('projects');
  }).then(() => {
    connection.queryInterface.dropTable('teams');
  }).then(() => {
    repopulate();
  });
};

const seedData = [
//create new user profile
  () => {
    return helpers.addUsers.create({
      auth_token: chance.character(),
      full_name: chance.word(),
      email: chance.email(),
      user_status: null,
      user_availability: chance.word(true, false)
    });
  },

//create new user table
  // () => {
  //   return helpers.Users.create({
  //     auth_token: chance.character()
  //   });
  // },

//create new team
//   () => {
//     return helpers.addTeams.create({
//       name: chance.word()
//     });
//   },

// //create new project
//   () => {
//     return helpers.addProjects.create({
//       project_name: chance.word(),
//       completion: chance.word(true, false)
//     });
//   },

// //create new phase
//   () => {
//     return helpers.addPhases.create({
//       phase_name: chance.word(),
//       phase_order: chance.natural({min: 1, max: 20}),
//       phase_status: chance.word('not started', 'in progress', 'finished'),
//       phase_color: chance.word('blue', 'green', 'yellow')
//     });
//   },

// //create new task
//   () => {
//     return helpers.addTasks.create({
//       task_name: chance.word(),
//       task_status: chance.word('not started', 'in progress', 'finished')
//     });
//   }
];

const repopulate = () => {
  seedData.forEach((func) => {
    func();
  });
};

seed();














