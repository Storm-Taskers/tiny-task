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
      user_color: 'blue',
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
      user_color: 'black',
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
      user_color: 'yellow',
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
      user_color: 'green',
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
      user_id: 'Kevin'
      }
    }, {end: () => {
          console.log('seed team added');
      }
    }, true);
  },

  () => {
    return handler.teams.updateTeams({params: {team_id: 1}, body: {
      user_id: 'Brian'
      }
    }, {end: () => {
          console.log('seed team updated');
      }
    }, true);
  },

  () => {
    return handler.teams.updateTeams({params: {team_id: 1}, body: {
      user_id: 'David'
      }
    }, {end: () => {
          console.log('seed team updated');
      }
    }, true);
  },
  () => {
    return handler.teams.updateTeams({params: {team_id: 1}, body: {
      user_id: 'Beth'
      }
    }, {end: () => {
          console.log('seed team updated');
      }
    }, true);
  },

  () => {
    return handler.projects.createNewProjects({body: {
      project_name: 'Tiny Task',
      user_id: 'Kevin',
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
    return handler.tasks.createNewTasks({params: {phase_id: 1}, body: {
      task_name: 'Create back-end',
      task_status: 'Finished',
      task_color: 'green'
      }
    }, {end: () => {
      console.log('seed task created');
      }
    }, true);
  },

  () => {
    return handler.tasks.createNewTasks({params: {phase_id: 1}, body: {
      task_name: 'Create front-end',
      task_status: 'Finished',
      task_color: 'blue'
      }
    }, {end: () => {
      console.log('seed task created');
      }
    }, true);
  },

  () => {
    return handler.tasks.createNewTasks({params: {phase_id: 2}, body: {
      task_name: 'Write more Tests',
      task_status: 'In progress',
      task_color: 'yellow'
      }
    }, {end: () => {
      console.log('seed task created');
      }
    }, true);
  },

  () => {
    return handler.tasks.createNewTasks({params: {phase_id: 2}, body: {
      task_name: 'Write more functions',
      task_status: 'In progress',
      task_color: 'orange'
      }
    }, {end: () => {
      console.log('seed task created');
      }
    }, true);
  },

  () => {
    return handler.tasks.createNewTasks({params: {phase_id: 3}, body: {
      task_name: 'Finish app',
      task_status: 'Not started',
      task_color: 'red'
      }
    }, {end: () => {
      console.log('seed task created');
      }
    }, true);
  },

  () => {
    return handler.tasks.createNewTasks({params: {phase_id: 3}, body: {
      task_name: 'Make it pretty',
      task_status: 'Not started',
      task_color: 'purple'
      }
    }, {end: () => {
      console.log('seed task created');
      }
    }, true);
  },

  () => {
    return handler.tasks.updateTasks({params: {task_id: 1}, body: {
      user_id: 'Kevin',
      stage: 'Not started'
      }
    }, {end: () => {
      console.log('seed task updated');
      }
    }, true);
  },
    () => {
    return handler.tasks.updateTasks({params: {task_id: 2}, body: {
      user_id: 'Brian',
      stage: 'Not started'
      }
    }, {end: () => {
      console.log('seed task updated');
      }
    }, true);
  },

    () => {
    return handler.tasks.updateTasks({params: {task_id: 3}, body: {
      user_id: 'Beth',
      stage: 'Not started'
      }
    }, {end: () => {
      console.log('seed task updated');
      }
    }, true);
  },

    () => {
    return handler.tasks.updateTasks({params: {task_id: 4}, body: {
      user_id: 'Kevin',
      stage: 'Not started'
      }
    }, {end: () => {
      console.log('seed task updated');
      }
    }, true);
  },

    () => {
    return handler.tasks.updateTasks({params: {task_id: 5}, body: {
      user_id: 'Brian',
      stage: 'Not started'
      }
    }, {end: () => {
      console.log('seed task updated');
      }
    }, true);
  },

    () => {
    return handler.tasks.updateTasks({params: {task_id: 6}, body: {
      user_id: 'Beth',
      stage: 'Not started'
      }
    }, {end: () => {
      console.log('seed task updated');
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
