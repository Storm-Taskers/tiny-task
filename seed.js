/*
to use:
  open sql server -- mysql.server start
  open database -- mysql -h localhost -u root -p
  push enter for password, none needed

  type SHOW DATABASES
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
  // () => {
  //   return handler.users.createNewUser({body: {
  //     auth_token: chance.character(),
  //     full_name: chance.word(),
  //     email: chance.email(),
  //     user_status: null,
  //     user_availability: chance.word()
  //     }
  //   }, {end: () => {
  //         console.log('finished');
  //       }
  //     }, true);
  // },

  () => {
    return handler.users.createNewUser({body: {
      auth_token: 'Kevin',
      full_name: 'Kevin Nguyen',
      email: 'kevinN@tinytask.com',
      user_status: 'Slacking off',
      user_availability: 'false'
      }
    }, {end: () => {
          console.log('finished');
        }
      }, true);
  },
  () => {
    return handler.users.createNewUser({body: {
      auth_token: 'Brian',
      full_name: 'Brian Leung',
      email: 'brianl@tinytask.com',
      user_status: 'Eating a hot pocket',
      user_availability: 'false'
      }
    }, {end: () => {
          console.log('finished');
        }
      }, true);
  },
  () => {
    return handler.users.createNewUser({body: {
      auth_token: 'David',
      full_name: 'David Hsiao',
      email: 'davidh@tinytask.com',
      user_status: 'Working hard',
      user_availability: 'true'
      }
    }, {end: () => {
          console.log('finished');
        }
      }, true);
  },
  () => {
    return handler.users.createNewUser({body: {
      auth_token: 'Beth',
      full_name: 'Beth Stevic',
      email: 'beths@tinytask.com',
      user_status: 'Working hard',
      user_availability: 'true'
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

  () => {
    return handler.teams.createNewTeams({
      name: 'Storm Taskers'
    }, {end: () => {
          console.log('seed team added');
    }}, true);
  },

  () => {
    return handler.teams.updateTeams({
      userid: '[Kevin, Brian, David, Beth]'
    }, {end: () => {
          console.log('seed team updated');
    }}, true);
  },


 //create new project
  // () => {
  //   return helpers.projects.createNewProjects({
  //     project_name: chance.word(),
  //     completion: chance.word(true, false)
  //   },{end: () => {
  //     console.log('seed project added');
  //   }}, true);
  // },

  () => {
    return helpers.projects.createNewProjects({
      project_name: 'Tiny Task',
      completion: 'In Progress'
    },{end: () => {
      console.log('seed project added');
    }}, true);
  },

// //create new phase
  // () => {
  //   return helpers.phases.createNewPhases({
  //     phase_name: chance.word(),
  //     phase_order: chance.natural({min: 1, max: 20}),
  //     phase_status: chance.word('not started', 'in progress', 'finished'),
  //     phase_color: chance.word('blue', 'green', 'yellow')
  //   }, {end: () => {
  //     console.log('seed phase added');
  //   }}, true);
  // },

    () => {
    return helpers.phases.createNewPhases({
      phase_name: 'Phase 1',
      phase_order: 1,
      phase_status: 'Finished',
      phase_color: 'blue'
    }, {end: () => {
      console.log('seed phase added');
    }}, true);
  },
    () => {
    return helpers.phases.createNewPhases({
      phase_name: 'Phase 2',
      phase_order: 2,
      phase_status: 'In progress',
      phase_color: 'green'
    }, {end: () => {
      console.log('seed phase added');
    }}, true);
  },
    () => {
    return helpers.phases.createNewPhases({
      phase_name: 'Phase 3',
      phase_order: 3,
      phase_status: 'Not started',
      phase_color: 'yellow'
    }, {end: () => {
      console.log('seed phase added');
    }}, true);
  },

//create new task
  // () => {
  //   return helpers.tasks.createNewTasks({
  //     task_name: chance.word(),
  //     task_status: chance.word('not started', 'in progress', 'finished')
  //   }, {end: () => {
  //     console.log('seed task created');
  //   }}, true);
  // }

  () => {
    return helpers.tasks.createNewTasks({
      phase_id: 1,
      task_name: 'Create back-end',
      task_status: 'Finished'
    }, {end: () => {
      console.log('seed task created');
    }}, true);
  },

  () => {
    return helpers.tasks.createNewTasks({
      phase_id: 1,
      task_name: 'Create front-end',
      task_status: 'Finished'
    }, {end: () => {
      console.log('seed task created');
    }}, true);
  },

  () => {
    return helpers.tasks.createNewTasks({
      phase_id: 2,
      task_name: 'Write more Tests',
      task_status: 'In progress'
    }, {end: () => {
      console.log('seed task created');
    }}, true);
  },

  () => {
    return helpers.tasks.createNewTasks({
      phase_id: 2,
      task_name: 'Write more functions',
      task_status: 'In progress'
    }, {end: () => {
      console.log('seed task created');
    }}, true);
  },

  () => {
    return helpers.tasks.createNewTasks({
      phase_id: 3,
      task_name: 'Finish app',
      task_status: 'Not started'
    }, {end: () => {
      console.log('seed task created');
    }}, true);
  },

  () => {
    return helpers.tasks.createNewTasks({
      phase_id: 3,
      task_name: 'Make it pretty',
      task_status: 'Not started'
    }, {end: () => {
      console.log('seed task created');
    }}, true);
  }
];

const seed = () => {
  seedData.forEach((func) => {
    func();
  });
};

seed();