const Chance = require('chance');
const models = require('./db/models.js');


const chance = new Chance();

//delete all old data
const seed = () => {
  // models.Users.destroy({
  //   where: {},
  //   truncate: true
  // }).then(() => {
  //     models.User_Profile.destroy({
  //     where: {},
  //     truncate: true
  //   });
  // }).then(() => {
  //     models.Teams.destroy({
  //     where: {},
  //     truncate: true
  //   });
  // }).then(() => {
  //     models.Projects.destroy({
  //     where: {},
  //     truncate: true
  //   });
  // }).then(() => {
  //     models.Phases.destroy({
  //     where: {},
  //     truncate: true
  //   });
  // }).then(() => {
  //   models.Tasks.destroy({
  //     where: {},
  //     truncate: true
  //   });
  // }).then(() => {
      repopulate();
  //});
};

const seedData = [
//create new user profile
  () => {
    return models.User_Profile.create({
      full_name: chance.word(),
      email: chance.email(),
      user_status: null,
      user_availability: chance.word(true, false)
    });
  },

//create new user table
  () => {
    return models.Users.create({
      auth_token: chance.character()
    });
  },

//create new team
  () => {
    return models.Teams.create();
  },

//create new project
  () => {
    return models.Projects.create({
      project_name: chance.word(),
      completion: chance.word(true, false)
    });
  },

//create new phase
  () => {
    return models.Phases.create({
      phase_name: chance.word(),
      phase_order: chance.natural({min: 1, max: 20}),
      phase_status: chance.word('not started', 'in progress', 'finished'),
      phase_color: chance.word('blue', 'green', 'yellow')
    });
  },

//create new task
  () => {
    return models.Tasks.create({
      task_name: chance.word(),
      task_status: chance.word('not started', 'in progress', 'finished')
    });
  }
];

const repopulate = () => {
  seedData.forEach((func) => {
    func();
  });
};

seed();














