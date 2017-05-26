const helper = require('./helperFunctions.js');

module.exports = {
  users: {
    get: (req, res) => {
      helper.retrieveUsers(req);
    },
    post: (req, res) => {
      let data = '';
      req.on('data', (chunk) => {
        data += chunk;
      });
      req.on('end', () => {
        console.log(data, 'inside users post requestHandler.js');
        helper.addUser(JSON.parse(data));
      });
      req.end('user added, requestHandler.js');
    },
    put: (req, res) => {
      let data = '';
      req.on('data', (chunk) => {
        data += chunk;
      });
      req.on('end', () => {
        console.log(data, 'inside users put requestHandler.js');
        helper.updateUser(JSON.parse(data));
      });
      req.end('user updated, requestHandler.js');
    },
    delete: (req, res) => {
      helper.deleteUser(req);
    }
  },
  teams: {
    get: (req, res) => {
      helper.retrieveTeam(req);
    },
    post: (req, res) => {
      let data = '';
      req.on('data', (chunk) => {
        data += chunk;
      });
      req.on('end', () => {
        console.log(data, 'inside teams post requestHandler.js');
        helper.addTeam(JSON.parse(data));
      });
      req.end('team added, requestHandler.js');
    },
    put: (req, res) => {
      let data = '';
      req.on('data', (chunk) => {
        data += chunk;
      });
      req.on('end', () => {
        console.log(data, 'inside teams put requestHandler.js');
        helper.updateTeam(JSON.parse(data));
      });
      req.end('team updated, requestHandler.js');
    },
    delete: (req, res) => {
      helper.deleteUTeam(req);
    }
  },
  messages: {
    get: (req, res) => {
      helper.retrieveMessage(req);
    },
    post: (req, res) => {
      let data = '';
      req.on('data', (chunk) => {
        data += chunk;
      });
      req.on('end', () => {
        console.log(data, 'inside messages post requestHandler.js');
        helper.addMessage(JSON.parse(data));
      });
      req.end('message added, requestHandler.js');
    },
    put: (req, res) => {
      let data = '';
      req.on('data', (chunk) => {
        data += chunk;
      });
      req.on('end', () => {
        console.log(data, 'inside messages put requestHandler.js');
        helper.updateMessage(JSON.parse(data));
      });
      req.end('message updated, requestHandler.js');
    },
    delete: (req, res) => {
      helper.deleteMessage(req);
    }
  },
  announcements: {
    get: (req, res) => {
      helper.retrieveAnnouncement(req);
    },
    post: (req, res) => {
      let data = '';
      req.on('data', (chunk) => {
        data += chunk;
      });
      req.on('end', () => {
        console.log(data, 'inside announcements post requestHandler.js');
        helper.addAnnouncement(JSON.parse(data));
      });
      req.end('announcement added, requestHandler.js');
    },
    put: (req, res) => {
      let data = '';
      req.on('data', (chunk) => {
        data += chunk;
      });
      req.on('end', () => {
        console.log(data, 'inside announcements put requestHandler.js');
        helper.updateAnnouncement(JSON.parse(data));
      });
      req.end('announcement updated, requestHandler.js');
    },
    delete: (req, res) => {
      helper.deleteAnnouncement(req);
    }
  },
  projects: {
    get: (req, res) => {
      helper.retrieveProject(req);
    },
    post: (req, res) => {
      let data = '';
      req.on('data', (chunk) => {
        data += chunk;
      });
      req.on('end', () => {
        console.log(data, 'inside projects post requestHandler.js');
        helper.addProject(JSON.parse(data));
      });
      req.end('project added, requestHandler.js');
    },
    put: (req, res) => {
      let data = '';
      req.on('data', (chunk) => {
        data += chunk;
      });
      req.on('end', () => {
        console.log(data, 'inside projects put requestHandler.js');
        helper.updateProject(JSON.parse(data));
      });
      req.end('project updated, requestHandler.js');
    },
    delete: (req, res) => {
      helper.deleteProject(req);
    }
  },
  phases: {
    get: (req, res) => {
      helper.retrievePhases(req);
    },
    post: (req, res) => {
      let data = '';
      req.on('data', (chunk) => {
        data += chunk;
      });
      req.on('end', () => {
        console.log(data, 'inside phases post requestHandler.js');
        helper.addPhase(JSON.parse(data));
      });
      req.end('phase added, requestHandler.js');
    },
    put: (req, res) => {
      let data = '';
      req.on('data', (chunk) => {
        data += chunk;
      });
      req.on('end', () => {
        console.log(data, 'inside phases put requestHandler.js');
        helper.updatePhase(JSON.parse(data));
      });
      req.end('phase updated, requestHandler.js');
    },
    delete: (req, res) => {
      helper.deletePhase(req);
    }
  },
  tasks: {
    get: (req, res) => {
      helper.retrieveTask(req);
    },
    post: (req, res) => {
      let data = '';
      req.on('data', (chunk) => {
        data += chunk;
      });
      req.on('end', () => {
        console.log(data, 'inside tasks post requestHandler.js');
        helper.addTask(JSON.parse(data));
      });
      req.end('task added, requestHandler.js');
    },
    put: (req, res) => {
      let data = '';
      req.on('data', (chunk) => {
        data += chunk;
      });
      req.on('end', () => {
        console.log(data, 'inside tasks put requestHandler.js');
        helper.updateTask(JSON.parse(data));
      });
      req.end('task updated, requestHandler.js');
    },
    delete: (req, res) => {
      helper.deleteTask(req);
    }
  },
  resources: {
    get: (req, res) => {
      helper.retrieveResource(req);
    },
    post: (req, res) => {
      let data = '';
      req.on('data', (chunk) => {
        data += chunk;
      });
      req.on('end', () => {
        console.log(data, 'inside resources post requestHandler.js');
        helper.addResource(JSON.parse(data));
      });
      req.end('resource added, requestHandler.js');
    },
    put: (req, res) => {
      let data = '';
      req.on('data', (chunk) => {
        data += chunk;
      });
      req.on('end', () => {
        console.log(data, 'inside resources put requestHandler.js');
        helper.updateResource(JSON.parse(data));
      });
      req.end('resource updated, requestHandler.js');
    },
    delete: (req, res) => {
      helper.deleteResource(req);
    }
};

