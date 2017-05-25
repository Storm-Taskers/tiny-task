const db = require('../db/models.js');

module.exports = {
  users: {GET, POST, PUT, DELETE},
  teams: {GET, POST, PUT, DELETE},
  messages: {GET, POST, PUT, DELETE},
  anouncements: {GET, POST, PUT, DELETE},
  projects: {GET, POST, PUT, DELETE},
  phases: {GET, POST, PUT, DELETE},
  tasks: {GET, POST, PUT, DELETE},
  resources: {GET, POST, PUT, DELETE}
}

