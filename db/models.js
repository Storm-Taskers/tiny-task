const Sequelize = require('sequelize');

// exports.connection = sequelize.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'tiny'
// });

const sequelize = new Sequelize('tiny_task', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

// sequelize.authenticate()
//   .then(() => {
//     console.log('successs');
//   })
//   .catch((err) => {
//     console.log(err, 'failed');
//   });

const Users = sequelize.define('users', {
  auth_token: { type: Sequelize.STRING, allowNull: false, primaryKey: true },
});

const User_Profile = sequelize.define('user_profile', {
  full_name: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING },
  user_status: { type: Sequelize.STRING },
  user_availability: { type: Sequelize.STRING }
});

User_Profile.belongsTo(Users);

const Teams = sequelize.define('teams', {
  project_name: { type: Sequelize.STRING, allowNull: false },
});

const Team_Users = sequelize.define('team_users', {
});

User.hasMany(Teams, { foreignKey: "auth_token" })
Team.hasMany(Team_Users, { foreignKey: 'team_id' })

const Team_Colors = sequelize.define('team_colors', {
  color: { type: Sequelize.STRING, allowNull: false },
});

const Announcements = sequelize.define('announcements', {
  announcement: { type: Sequelize.TEXT, allowNull: false },
});

const Messages = sequelize.define('messages', {
  messages: { type: Sequelize.TEXT, allowNull: false }
});

const Phases = sequelize.define('phases', {
  phase_name: { type: Sequelize.STRING, allowNull: false },
  phase_order: { type: Sequelize.INTEGER, allowNull: false },
  phase_status: { type: Sequelize.STRING, allowNull: false },
  phase_color: { type: Sequelize.STRING, allowNull: false },
});

const Tasks = sequelize.define('');

const User_Tasks = sequelize.define('');

const Shared_Resources = sequelize.define('');

