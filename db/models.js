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
  auth_token: { type: Sequelize.STRING, allowNull: false, primaryKey: true }
});

const User_Profile = sequelize.define('user_profile', {
  full_name: { type: Sequelize.TEXT, allowNull: false },
  email: { type: Sequelize.TEXT },
  user_status: { type: Sequelize.TEXT },
  user_availability: { type: Sequelize.TEXT }
});


//User_Profile.belongsTo(Users);
Users.hasOne(User_Profile, { foreignKey: 'user_profile_id' });
// const Teams = sequelize.define('teams', {
//   project_name: { type: Sequelize.STRING, allowNull: false },
// });

// const Projects = sequelize.define('projects', {
//   project_name: { type: Sequelize.STRING, allowNull: false },
//   completion: { type: Sequelize.BOOLEAN, default: false }
// })

// const Team_Users = sequelize.define('team_users', {
// });

// Users.belongsToMany(Teams, { as: 'users', through: 'team_users' })
// Teams.belongsToMany(Users, { as: 'teams', through: 'team_users' })
// Projects.hasOne(Teams, { foreignKey: 'project_id' })

// const Team_Colors = sequelize.define('team_colors', {
//   color: { type: Sequelize.STRING, allowNull: false },
// });

// const Announcements = sequelize.define('announcements', {
//   announcement: { type: Sequelize.STRING, allowNull: false },
// });

// const Messages = sequelize.define('messages', {
//   messages: { type: Sequelize.STRING, allowNull: false }
// });

// const Phases = sequelize.define('phases', {
//   phase_name: { type: Sequelize.STRING, allowNull: false },
//   phase_order: { type: Sequelize.INTEGER, allowNull: false },
//   phase_status: { type: Sequelize.STRING, allowNull: false },
//   phase_color: { type: Sequelize.STRING, allowNull: false },
// });

// const Tasks = sequelize.define('taks', {
//   task_name: { type: Sequelize.STRING, allowNull: false },
//   task_status: { type: Sequelize.STRING, allowNull: false },

// });

// const User_Tasks = sequelize.define('user_tasks', {
// });

// const Shared_Resources = sequelize.define('shared_resources', {
//   resource: { type: Sequelize.STRING, allowNull: false },
//   type: { type: Sequelize.STRING, allowNull: false }
// });

Users.sync();
User_Profile.sync();

module.exports.Users = Users;
module.exports.User_Profile = User_Profile;






// Teams.sync();
// Projects.sync();
// Team_Users.sync();
// Team_Colors.sync();
// Announcements.sync();
// Messages.sync();
// Phases.sync();
// Tasks.sync();
// User_Tasks.sync();
// Shared_Resources.sync();


// module.exports.Teams = Teams;
// module.exports.Projects = Projects;
// module.exports.Team_Users = Team_Users;
// module.exports.Team_Colors = Team_Colors;
// module.exports.Announcements = Announcements;
// module.exports.Messages = Messages;
// module.exports.Phases = Phases;
// module.exports.Tasks = Tasks;
// module.exports.User_Tasks = User_Tasks;
// module.exports.Shared_Resources = Shared_Resources;

