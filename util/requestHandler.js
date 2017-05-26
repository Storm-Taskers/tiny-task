const helper = require('./helperFunctions.js');


exports.users = {
  retrieveUser: (req, res) => {
    helper.retrieveUsers(req)
    .then((user) => {
      res.status(200).send('user retrieved');
    })
    .catch((err) => {
      res.status(404).send(err, 'error retrieving user');
    });
  },
  createNewUser: (req, res) => {
    helper.addUser(req.body)
    .then((user) => {
      res.status(200).send('user added');
    })
    .catch ((err) => {
      res.status(404).send(err, 'error on creating user');
    });
  },
  updateUser: (req, res) => {
    helper.updateUser(req.body)
    .then((user) => {
      res.status(200).send('user updated');
    })
    .catch((err) => {
      res.status(404).send(err, 'error on updating user');
    });
  },
  deleteUser: (req, res) => {
    helper.deleteUser(req)
    .then((user) => {
      res.status(200).send('user deleted');
    })
    .catch((err) => {
      res.status(404).send(err, 'error on deleting user');
    });
  }
},
exports.teams = {
  retrieveTeams: (req, res) => {
   helper.retrieveTeams(req)
    .then((team) => {
      res.status(200).send('team retrieved');
    })
    .catch((err) => {
      res.status(404).send(err, 'error retrieving team');
    });
  },
  createNewTeams: (req, res) => {
    helper.addTeams(req.body)
    .then((team) => {
      res.status(200).send('team added');
    })
    .catch ((err) => {
      res.status(404).send(err, 'error on creating team');
    });
  },
  updateTeams: (req, res) => {
    helper.updateTeams(req.body)
    .then((team) => {
      res.status(200).send('team updated');
    })
    .catch((err) => {
      res.status(404).send(err, 'error on updating team');
    });
  },
  deleteTeams: (req, res) => {
    helper.deleteTeams(req)
    .then((team) => {
      res.status(200).send('team deleted');
    })
    .catch((err) => {
      res.status(404).send(err, 'error on deleting team');
    });
  }
},
exports.messages = {
  retrieveMessages: (req, res) => {
    helper.retrieveMessages(req)
    .then((message) => {
      res.status(200).send('message retrieved');
    })
    .catch((err) => {
      res.status(404).send(err, 'error retrieving message');
    });
  },
  createNewMessages: (req, res) => {
    helper.addMessages(req.body)
    .then((message) => {
      res.status(200).send('message added');
    })
    .catch ((err) => {
      res.status(404).send(err, 'error on creating message');
    });
  },
  updateMessages: (req, res) => {
    helper.updateMessages(req.body)
    .then((message) => {
      res.status(200).send('message updated');
    })
    .catch((err) => {
      res.status(404).send(err, 'error on updating message');
    });
  },
  deleteMessages: (req, res) => {
    helper.deleteMessages(req)
    .then((message) => {
      res.status(200).send('message deleted');
    })
    .catch((err) => {
      res.status(404).send(err, 'error on deleting message');
    });
  }
},
exports.announcements = {
  retrieveAnnouncements: (req, res) => {
    helper.retrieveAnnouncements(req)
    .then((announcement) => {
      res.status(200).send('announcement retrieved');
    })
    .catch((err) => {
      res.status(404).send(err, 'error retrieving announcement');
    });
  },
  createNewAnnouncements: (req, res) => {
    helper.addAnnouncements(req.body)
    .then((announcement) => {
      res.status(200).send('announcement added');
    })
    .catch ((err) => {
      res.status(404).send(err, 'error on creating announcement');
    });
  },
  updateAnnouncements: (req, res) => {
    helper.updateAnnouncements(req.body)
    .then((announcement) => {
      res.status(200).send('announcement updated');
    })
    .catch((err) => {
      res.status(404).send(err, 'error on updating announcement');
    });
  },
  deleteAnnouncements: (req, res) => {
    helper.deleteAnnouncements(req)
    .then((announcement) => {
      res.status(200).send('announcement deleted');
    })
    .catch((err) => {
      res.status(404).send(err, 'error on deleting announcement');
    });
  }
},
exports.projects = {
  retrieveProjects: (req, res) => {
    helper.retrieveProjects(req)
    .then((project) => {
      res.status(200).send('project retrieved');
    })
    .catch((err) => {
      res.status(404).send(err, 'error retrieving project');
    });
  },
  createNewProjects: (req, res) => {
    helper.addProjects(req.body)
    .then((project) => {
      res.status(200).send('project added');
    })
    .catch ((err) => {
      res.status(404).send(err, 'error on creating project');
    });
  },
  updateProjects: (req, res) => {
    helper.updateProjects(req.body)
    .then((project) => {
      res.status(200).send('project updated');
    })
    .catch((err) => {
      res.status(404).send(err, 'error on updating project');
    });
  },
  deleteProjects: (req, res) => {
    helper.deleteProjects(req)
    .then((project) => {
      res.status(200).send('project deleted');
    })
    .catch((err) => {
      res.status(404).send(err, 'error on deleting project');
    });
  }
},
exports.phases = {
  retrievePhases: (req, res) => {
    helper.retrievePhases(req)
    .then((phase) => {
      res.status(200).send('phase retrieved');
    })
    .catch((err) => {
      res.status(404).send(err, 'error retrieving phase');
    });
  },
  createNewPhases: (req, res) => {
    helper.addPhases(req.body)
    .then((phase) => {
      res.status(200).send('phase added');
    })
    .catch ((err) => {
      res.status(404).send(err, 'error on creating phase');
    });
  },
  updatePhases: (req, res) => {
    helper.updatePhases(req.body)
    .then((phase) => {
      res.status(200).send('phase updated');
    })
    .catch((err) => {
      res.status(404).send(err, 'error on updating phase');
    });
  },
  deletePhases: (req, res) => {
    helper.deletePhases(req)
    .then((phase) => {
      res.status(200).send('phase deleted');
    })
    .catch((err) => {
      res.status(404).send(err, 'error on deleting phase');
    });
  }
},
exports.tasks = {
  retrieveTasks: (req, res) => {
    helper.retrieveTasks(req)
    .then((task) => {
      res.status(200).send('task retrieved');
    })
    .catch((err) => {
      res.status(404).send(err, 'error retrieving task');
    });
  },
  createNewTasks: (req, res) => {
    helper.addTasks(req.body)
    .then((task) => {
      res.status(200).send('task added');
    })
    .catch ((err) => {
      res.status(404).send(err, 'error on creating task');
    });
  },
  updateTasks: (req, res) => {
    helper.updateTasks(req.body)
    .then((task) => {
      res.status(200).send('task updated');
    })
    .catch((err) => {
      res.status(404).send(err, 'error on updating task');
    });
  },
  deleteTasks: (req, res) => {
    helper.deleteTasks(req)
    .then((task) => {
      res.status(200).send('task deleted');
    })
    .catch((err) => {
      res.status(404).send(err, 'error on deleting task');
    });
  }
},
exports.resources = {
  retrieveResources: (req, res) => {
    helper.retrieveResources(req)
    .then((resource) => {
      res.status(200).send('resource retrieved');
    })
    .catch((err) => {
      res.status(404).send(err, 'error retrieving resource');
    });
  },
  createNewResources: (req, res) => {
    helper.addResources(req.body)
    .then((resource) => {
      res.status(200).send('resource added');
    })
    .catch ((err) => {
      res.status(404).send(err, 'error on creating resource');
    });
  },
  updateResources: (req, res) => {
    helper.updateResources(req.body)
    .then((resource) => {
      res.status(200).send('resource updated');
    })
    .catch((err) => {
      res.status(404).send(err, 'error on updating resource');
    });
  },
  deleteResources: (req, res) => {
    helper.deleteResources(req)
    .then((resource) => {
      res.status(200).send('resource deleted');
    })
    .catch((err) => {
      res.status(404).send(err, 'error on deleting resource');
    });
  }


