/*
to use:
  open sql server -- mysql.server start
  open database -- mysql -h localhost -u root -p
  push enter for password, none needed

  type SHOW DATABASE
  if tiny_task exists, drop database and create new:
  DROP DATABASE tiny_task;
  CREATE DATABASE tiny_task;

  this will clear database
  in terminal write 'npm run seed' to seed the database
*/

const Chance = require('chance');
//const models = require('./db/models.js');
const handler = require('./util/requestHandler.js');

//const connection = models.connection;

const chance = new Chance();


const seedData = [
//create new user
  () => {
    return handler.users.createNewUser({body: {
      auth_token: chance.character(),
      full_name: chance.word(),
      email: chance.email(),
      user_status: null,
      user_availability: chance.word()
      }
    }, {end: () => {
          console.log('finished');
        }
      }, true);
  },

//create new team
  // () => {
  //   return handler.teams.createNewTeams({
  //     name: chance.word()
  //   }, {end: () => {
  //         console.log('seed team added');
  //   }}, true);
  // },

 //create new project
  // () => {
  //   return helpers.projects.createNewProjects({
  //     project_name: chance.word(),
  //     completion: chance.word(true, false)
  //   },{end: () => {
  //     console.log('seed project added');
  //   }}, true);
  // },

// //create new phase
  //() => {
  //   return helpers.phases.createNewPhases({
  //     phase_name: chance.word(),
  //     phase_order: chance.natural({min: 1, max: 20}),
  //     phase_status: chance.word('not started', 'in progress', 'finished'),
  //     phase_color: chance.word('blue', 'green', 'yellow')
  //   }, {end: () => {
  //     console.log('seed phase added');
  //   }}, true);
  // },

//create new task
  // () => {
  //   return helpers.tasks.createNewTasks({
  //     task_name: chance.word(),
  //     task_status: chance.word('not started', 'in progress', 'finished')
  //   }, {end: () => {
  //     console.log('seed task created');
  //   }}, true);
  // }
];

const seed = () => {
  seedData.forEach((func) => {
    func();
  });
};

seed();
