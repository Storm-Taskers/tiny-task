/*
to use:
  open sql server -- mysql.server start
  open database -- mysql -h localhost -u root -p
  push enter for password, none needed

  type SHOW DATABASES
  if tiny_task exists, drop database and create new:
  DROP DATABASE tiny_task;
  CREATE DATABASE tiny_task;

  in terminal write 'npm run seed' to seed the database
*/

const Chance = require('chance');
const handler = require('./util/requestHandler.js');


const seedData = [
  () => {
    return handler.users.createNewUser({body: {
      auth_token: 'Kevin',
      full_name: 'Kevin Nguyen',
      email: 'kevinN@tinytask.com',
      user_status: 'Slacking off',
      user_availability: 'false',
      user_color: 'red'
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
      user_availability: 'false',
      user_color: 'yellow'
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
      user_availability: 'true',
      user_color: 'blue'
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
      user_availability: 'true',
      user_color: 'green'
      }
    }, {end: () => {
          console.log('finished');
      }
    }, true);
  },

  () => {
    return handler.teams.createNewTeams({body: {
      team_name: 'Storm Taskers',
      auth_token: 'Kevin'
      }
    }, {end: () => {
          console.log('seed team added');
      }
    }, true);
  },

  () => {
    return handler.teams.updateTeams({body: {
      team_id: 1,
      auth_token: 'Brian'
      }
    }, {end: () => {
          console.log('seed team updated');
      }
    }, true);
  },

  () => {
    return handler.teams.updateTeams({body: {
      team_id: 1,
      auth_token: 'David'
      }
    }, {end: () => {
          console.log('seed team updated');
      }
    }, true);
  },
  () => {
    return handler.teams.updateTeams({body: {
      team_id: 1,
      auth_token: 'Beth'
      }
    }, {end: () => {
          console.log('seed team updated');
      }
    }, true);
  },

  () => {
    return handler.projects.createNewProjects({body: {
      project_name: 'Tiny Task',
      auth_token: 'Kevin',
      team_id: 1
      }
    },{end: () => {
      console.log('seed project added');
      }
    }, true);
  },

() => {
    return handler.phases.createNewPhases({
      params: {
        project_id: 1
      },
      body: {
        phase_name: 'Phase 1',
        phase_order: 1,
        phase_status: 'Finished',
        phase_color: 'blue',
        auth_token: 'Kevin',
        team_id: 1
      }
    }, {
        end: () => {
          console.log('seed phase added');
        }
      }, true);
  },
  () => {
    return handler.phases.createNewPhases({
      params: {
        project_id: 1
      },
      body: {
        phase_name: 'Phase 2',
        phase_order: 2,
        phase_status: 'In progress',
        phase_color: 'green',
        auth_token: 'Kevin',
        team_id: 1
      }
    }, {
        end: () => {
          console.log('seed phase added');
        }
      }, true);
  },
  () => {
    return handler.phases.createNewPhases({
      params: {
        project_id: 1
      },
      body: {
        phase_name: 'Phase 3',
        phase_order: 3,
        phase_status: 'Not started',
        phase_color: 'yellow',
        auth_token: 'Kevin',
        team_id: 1
      }
    }, {
        end: () => {
          console.log('seed phase added');
        }
      }, true);
  },

  () => {
    return handler.tasks.createNewTasks({body: {
      task_name: 'Create back-end',
      task_status: 'Finished',
      phase_id: 1
      }
    }, {end: () => {
      console.log('seed task created');
      }
    }, true);
  },

  () => {
    return handler.tasks.createNewTasks({body: {
      task_name: 'Create front-end',
      task_status: 'Finished',
      phase_id: 1
      }
    }, {end: () => {
      console.log('seed task created');
      }
    }, true);
  },

  () => {
    return handler.tasks.createNewTasks({body: {
      task_name: 'Write more Tests',
      task_status: 'In progress',
      phase_id: 2
      }
    }, {end: () => {
      console.log('seed task created');
      }
    }, true);
  },

  () => {
    return handler.tasks.createNewTasks({body: {
      task_name: 'Write more functions',
      task_status: 'In progress',
      phase_id: 2
      }
    }, {end: () => {
      console.log('seed task created');
      }
    }, true);
  },

  () => {
    return handler.tasks.createNewTasks({body: {
      task_name: 'Finish app',
      task_status: 'Not started',
      phase_id: 3
      }
    }, {end: () => {
      console.log('seed task created');
      }
    }, true);
  },

  () => {
    return handler.tasks.createNewTasks({body: {
      task_name: 'Make it pretty',
      task_status: 'Not started',
      phase_id: 3
      }
    }, {end: () => {
      console.log('seed task created');
      }
    }, true);
  }
];

const seed = () => {
  seedData.forEach((func, index) => {
    setTimeout(func, 1000 * (index + 1));
  });
};

seed();
