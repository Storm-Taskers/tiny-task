const Sequelize = require('sequelize');

const sequelize = new Sequelize('tiny_task', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});


sequelize.authenticate()
  .then(() => {
    console.log('connection has been established successfully');
  })
  .catch((err) => {
    console.log('Unable to connect to DB', err);
  });

const Users = sequelize.define('users', {
  auth_token: { type: Sequelize.STRING, allowNull: false, primaryKey: true },
});

// const User_Profile = sequelize.define('user_profile', {
//   full_name: { type: Sequelize.TEXT, allowNull: false },
//   email: { type: Sequelize.TEXT },
//   user_status: { type: Sequelize.TEXT },
//   user_availability: { type: Sequelize.TEXT }
// });

// User_Profile.belongsTo(Users);

// const Teams = sequelize.define('teams', {
//   project_name: { type: Sequelize.TEXT, allowNull: false },
// });

// const Projects = sequelize.define('projects', {
//   project_name: { type: Sequelize.TEXT, allowNull: false },
//   completion: { type: Sequelize.BOOLEAN, default: false }
// })

// const Team_Users = sequelize.define('team_users', {
// });

// Users.belongsToMany(Teams, { as: 'users', through: 'team_users' })
// Teams.belongsToMany(Users, { as: 'teams', through: 'team_users' })
// Projects.hasOne(Teams, { foreignKey: 'project_id' })

// const Team_Colors = sequelize.define('team_colors', {
//   color: { type: Sequelize.TEXT, allowNull: false },
// });

// const Announcements = sequelize.define('announcements', {
//   announcement: { type: Sequelize.TEXT, allowNull: false },
// });

// const Messages = sequelize.define('messages', {
//   messages: { type: Sequelize.TEXT, allowNull: false }
// });

// const Phases = sequelize.define('phases', {
//   phase_name: { type: Sequelize.TEXT, allowNull: false },
//   phase_order: { type: Sequelize.INTEGER, allowNull: false },
//   phase_status: { type: Sequelize.TEXT, allowNull: false },
//   phase_color: { type: Sequelize.TEXT, allowNull: false },
// });

// const Tasks = sequelize.define('taks', {
//   task_name: { type: Sequelize.TEXT, allowNull: false },
//   task_status: { type: Sequelize.TEXT, allowNull: false },

// });

// const User_Tasks = sequelize.define('user_tasks', {
// });

// const Shared_Resources = sequelize.define('shared_resources', {
//   resource: { type: Sequelize.TEXT, allowNull: false },
//   type: { type: Sequelize.TEXT, allowNull: false }
// });