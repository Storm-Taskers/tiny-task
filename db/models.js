const Sequelize = require('sequelize');

const connection = new Sequelize('tiny_task', 'root', '');

const Users = connection.define('users', {
  auth_token: { type: Sequelize.STRING, unique: true, allowNull: false, primaryKey: true },
});

const User_Profile = connection.define('user_profile', {
  full_name: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING },
  user_status: { type: Sequelize.STRING },
  user_availability: { type: Sequelize.STRING }
});

Users.belongsTo(User_Profile, { foreignKey: { name: 'user_profile_id', targetKey: 'id' } });

const Teams = connection.define('teams', {
  team_name: { type: Sequelize.STRING, allowNull: false }
});

const Team_Users = connection.define('team_users', {
});

Users.hasMany(Team_Users, { foreignKey: { name: 'user_id', targetKey: 'auth_token' } })
Teams.hasMany(Team_Users, { foreignKey: { name: 'team_id', targetKey: 'id' } })
// Users.belongsToMany(Teams, { as: 'Users', through: 'Team_Users' })
// Teams.belongsToMany(Users, { as: 'Teams', through: 'Team_Users' })

const Projects = connection.define('projects', {
  project_name: { type: Sequelize.STRING, allowNull: false },
  completion: { type: Sequelize.BOOLEAN, default: false }
})
Projects.belongsTo(Teams, { foreignKey: { name: 'team_id', targetKey: 'id' } });

// const Team_Colors = connection.define('team_colors', {
//   color: { type: Sequelize.STRING, allowNull: false },
// });

// const Announcements = connection.define('announcements', {
//   announcement: { type: Sequelize.STRING, allowNull: false },
// });

// const Messages = connection.define('messages', {
//   messages: { type: Sequelize.STRING, allowNull: false }
// });
// Users.belongsToMany(Teams, { as: 'Users', through: 'Messages' })
// Teams.belongsToMany(Users, { as: 'Teams', through: 'Messages' })

// const Phases = connection.define('phases', {
//   phase_name: { type: Sequelize.STRING, allowNull: false },
//   phase_order: { type: Sequelize.INTEGER, allowNull: false },
//   phase_status: { type: Sequelize.STRING, allowNull: false },
//   phase_color: { type: Sequelize.STRING, allowNull: false },
// });

// const Tasks = connection.define('taks', {
//   task_name: { type: Sequelize.STRING, allowNull: false },
//   task_status: { type: Sequelize.STRING, allowNull: false },

// });

// const User_Tasks = connection.define('user_tasks', {
// });

// const Shared_Resources = connection.define('shared_resources', {
//   resource: { type: Sequelize.STRING, allowNull: false },
//   type: { type: Sequelize.STRING, allowNull: false }
// });

connection.sync({
  force: true
}).then(() => {

}).catch((error) => {
  console.log(error);
});

exports.Users = Users;
exports.User_Profile = User_Profile;
module.exports.Teams = Teams;
module.exports.Team_Users = Team_Users;
module.exports.Projects = Projects;
// module.exports.Team_Colors = Team_Colors;
// module.exports.Announcements = Announcements;
// module.exports.Messages = Messages;
// module.exports.Phases = Phases;
// module.exports.Tasks = Tasks;
// module.exports.User_Tasks = User_Tasks;
// module.exports.Shared_Resources = Shared_Resources;

