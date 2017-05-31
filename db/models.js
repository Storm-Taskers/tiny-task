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

Users.belongsTo(User_Profile, { foreignKey: { name: 'user_profile_id', targetKey: 'id', allowNull: false, unique: true } });

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
Projects.belongsTo(Users, { foreignKey: { name: 'user_id', target: 'auth_token' } })
Projects.belongsTo(Teams, { foreignKey: { name: 'team_id', targetKey: 'id' } });

const Phases = connection.define('phases', {
  phase_name: { type: Sequelize.STRING, allowNull: false },
  phase_color: { type: Sequelize.STRING, allowNull: false },
  phase_order: { type: Sequelize.INTEGER, allowNull: false },
  phase_status: { type: Sequelize.STRING, allowNull: false },
});
Phases.belongsTo(Projects, { foreignKey: { name: 'project_id', targetKey: 'id' } });

const Tasks = connection.define('tasks', {
  task_name: { type: Sequelize.STRING, allowNull: false },
  task_status: { type: Sequelize.STRING, allowNull: false },
});
Tasks.belongsTo(Phases, { foreignKey: { name: 'phase_id', targetKey: 'id' } });

const User_Tasks = connection.define('user_tasks', {
  stage: { type: Sequelize.STRING, allowNull: false },
});
Users.belongsToMany(Tasks, { as: 'Users', through: 'User_Tasks' })
// Tasks.hasMany(User_Tasks, { foreignKey: { name: 'task_id', targetKey: 'id' } })
//Users.hasMany(User_Tasks, { foreignKey: { name: 'user_id', targetKey: 'auth_token' } })

const Messages = connection.define('messages', {
  message: { type: Sequelize.TEXT }
});
Users.hasMany(Messages, { foreignKey: { name: 'user_id', targetKey: 'auth_token' } })
Teams.hasMany(Messages, { foreignKey: { name: 'team_id', targetKey: 'id' } })

const Announcements = connection.define('announcements', {
  announcement: { type: Sequelize.STRING, allowNull: false },
});
Users.hasMany(Announcements, { foreignKey: { name: 'user_id', targetKey: 'auth_token' } })
Teams.hasMany(Announcements, { foreignKey: { name: 'team_id', targetKey: 'id' } })

const Shared_Resources = connection.define('shared_resources', {
  resource: { type: Sequelize.STRING, allowNull: false },
  type: { type: Sequelize.STRING, allowNull: false }
});
Users.hasMany(Shared_Resources, { foreignKey: { name: 'user_id', targetKey: 'auth_token' } })
Teams.hasMany(Shared_Resources, { foreignKey: { name: 'team_id', targetKey: 'id' } })

const Team_Colors = connection.define('team_colors', {
  color: { type: Sequelize.STRING, allowNull: false },
});
Users.hasMany(Team_Colors, { foreignKey: { name: 'user_id', targetKey: 'auth_token' } })
Teams.hasMany(Team_Colors, { foreignKey: { name: 'team_id', targetKey: 'id' } })

connection.sync({
  //force: true
}).then(() => {
}).catch((error) => {
  console.log(error);
});

exports.Users = Users;
exports.User_Profile = User_Profile;
exports.Teams = Teams;
exports.Team_Users = Team_Users;
exports.Projects = Projects;
exports.Phases = Phases;
exports.Tasks = Tasks;
exports.User_Tasks = User_Tasks;
exports.Messages = Messages;
exports.Announcements = Announcements;
exports.Shared_Resources = Shared_Resources;
exports.Team_Colors = Team_Colors;

