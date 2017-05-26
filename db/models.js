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
  auth_token: { type: Sequelize.STRING, allowNull: false, primaryKey: true},
  user_profile_id: { type: Sequelize.INTEGER, allowNull: false }
});

const User_Profile = sequelize.define('user_profile', {
  full_name: {type: Sequelize.STRING, allowNull: false},
  email: {type: Sequelize.STRING},
  user_status: {type: Sequelize.STRING},
  user_availability: {type: Sequelize.STRING}
});

User_Profile.belongsTo(Users);

const Teams = sequelize.define('teams', {
  project_name: { type: Sequelize.STRING, allowNull: false},
});

const Team_Users = sequelize.define('team_users', {
  
});

const Team_Colors = sequelize.define('');

const Announcements = sequelize.define('announcements', );

const Messages = sequelize.define('');

const Phases = sequelize.define();

const Tasks = sequelize.define('');

const User_Tasks = sequelize.define('');

const Shared_Resources = sequelize.define('');

