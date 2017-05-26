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
};

exports.teams = {
  retrieveTeams: (req, res) => {
   helper.retrieveTeam(req)
    .then((team) => {
      res.status(200).send('team retrieved');
    })
    .catch((err) => {
      res.status(404).send(err, 'error retrieving team');
    });
  },
  createNewTeams: (req, res) => {
    helper.addTeam(req.body)
    .then((team) => {
      res.status(200).send('team added');
    })
    .catch ((err) => {
      res.status(404).send(err, 'error on creating team');
    });
  },
  updateTeams: (req, res) => {
    helper.updateTeam(req.body)
    .then((team) => {
      res.status(200).send('team updated');
    })
    .catch((err) => {
      res.status(404).send(err, 'error on updating team');
    });
  },
  deleteTeams: (req, res) => {
    helper.deleteTeam(req)
    .then((team) => {
      res.status(200).send('team deleted');
    })
    .catch((err) => {
      res.status(404).send(err, 'error on deleting team');
    });
  }
}

exports.messages = {
  retrieveMessages: (req, res) => {
    helper.retrieveMessage(req)
    .then((message) => {
      res.status(200).send('message retrieved');
    })
    .catch((err) => {
      res.status(404).send(err, 'error retrieving message');
    });
  },
  createNewMessages: (req, res) => {
    helper.addMessage(req.body)
    .then((message) => {
      res.status(200).send('message added');
    })
    .catch ((err) => {
      res.status(404).send(err, 'error on creating message');
    });
  },
  updateMessages: (req, res) => {
    helper.updateMessage(req.body)
    .then((message) => {
      res.status(200).send('message updated');
    })
    .catch((err) => {
      res.status(404).send(err, 'error on updating message');
    });
  },
  deleteMessages: (req, res) => {
    helper.deleteMessage(req)
    .then((message) => {
      res.status(200).send('message deleted');
    })
    .catch((err) => {
      res.status(404).send(err, 'error on deleting message');
    });
  }
}

exports.announcements = {
  retrieveAnnouncements: (req, res) => {
    helper.retrieveAnnouncement(req)
    .then((announcement) => {
      res.status(200).send('announcement retrieved');
    })
    .catch((err) => {
      res.status(404).send(err, 'error retrieving announcement');
    });
  },
  createNewAnnouncements: (req, res) => {
    helper.addAnnouncement(req.body)
    .then((announcement) => {
      res.status(200).send('announcement added');
    })
    .catch ((err) => {
      res.status(404).send(err, 'error on creating announcement');
    });
  },
  updateAnnouncements: (req, res) => {
    helper.updateAnnouncement(req.body)
    .then((announcement) => {
      res.status(200).send('announcement updated');
    })
    .catch((err) => {
      res.status(404).send(err, 'error on updating announcement');
    });
  },
  deleteAnnouncements: (req, res) => {
    helper.deleteAnnouncement(req)
    .then((announcement) => {
      res.status(200).send('announcement deleted');
    })
    .catch((err) => {
      res.status(404).send(err, 'error on deleting announcement');
    });
  }
}

exports.projects = {
  retrieveProjects: (req, res) => {
    helper.retrieveProject(req)
    .then((project) => {
      res.status(200).send('project retrieved');
    })
    .catch((err) => {
      res.status(404).send(err, 'error retrieving project');
    });
  },
  createNewProjects: (req, res) => {
    helper.addProject(req.body)
    .then((project) => {
      res.status(200).send('project added');
    })
    .catch ((err) => {
      res.status(404).send(err, 'error on creating project');
    });
  },
  updateProjects: (req, res) => {
    helper.updateProject(req.body)
    .then((project) => {
      res.status(200).send('project updated');
    })
    .catch((err) => {
      res.status(404).send(err, 'error on updating project');
    });
  },
  deleteProjects: (req, res) => {
    helper.deleteProject(req)
    .then((project) => {
      res.status(200).send('project deleted');
    })
    .catch((err) => {
      res.status(404).send(err, 'error on deleting project');
    });
  }
}

exports.phases = {
  retrievePhases: (req, res) => {
    helper.retrievePhase(req)
    .then((phase) => {
      res.status(200).send('phase retrieved');
    })
    .catch((err) => {
      res.status(404).send(err, 'error retrieving phase');
    });
  },
  createNewPhases: (req, res) => {
    helper.addPhase(req.body)
    .then((phase) => {
      res.status(200).send('phase added');
    })
    .catch ((err) => {
      res.status(404).send(err, 'error on creating phase');
    });
  },
  updatePhases: (req, res) => {
    helper.updatePhase(req.body)
    .then((phase) => {
      res.status(200).send('phase updated');
    })
    .catch((err) => {
      res.status(404).send(err, 'error on updating phase');
    });
  },
  deletePhases: (req, res) => {
    helper.deletePhase(req)
    .then((phase) => {
      res.status(200).send('phase deleted');
    })
    .catch((err) => {
      res.status(404).send(err, 'error on deleting phase');
    });
  }
}

exports.tasks = {
  retrieveTasks: (req, res) => {
    helper.retrieveTask(req)
    .then((task) => {
      res.status(200).send('task retrieved');
    })
    .catch((err) => {
      res.status(404).send(err, 'error retrieving task');
    });
  },
  createNewTasks: (req, res) => {
    helper.addTask(req.body)
    .then((task) => {
      res.status(200).send('task added');
    })
    .catch ((err) => {
      res.status(404).send(err, 'error on creating task');
    });
  },
  updateTasks: (req, res) => {
    helper.updateTask(req.body)
    .then((task) => {
      res.status(200).send('task updated');
    })
    .catch((err) => {
      res.status(404).send(err, 'error on updating task');
    });
  },
  deleteTasks: (req, res) => {
    helper.deleteTask(req)
    .then((task) => {
      res.status(200).send('task deleted');
    })
    .catch((err) => {
      res.status(404).send(err, 'error on deleting task');
    });
  }
}

exports.resources = {
  retrieveResources: (req, res) => {
    helper.retrieveResource(req)
    .then((resource) => {
      res.status(200).send('resource retrieved');
    })
    .catch((err) => {
      res.status(404).send(err, 'error retrieving resource');
    });
  },
  createNewResources: (req, res) => {
    helper.addResource(req.body)
    .then((resource) => {
      res.status(200).send('resource added');
    })
    .catch ((err) => {
      res.status(404).send(err, 'error on creating resource');
    });
  },
  updateResources: (req, res) => {
    helper.updateResource(req.body)
    .then((resource) => {
      res.status(200).send('resource updated');
    })
    .catch((err) => {
      res.status(404).send(err, 'error on updating resource');
    });
  },
  deleteResources: (req, res) => {
    helper.deleteResource(req)
    .then((resource) => {
      res.status(200).send('resource deleted');
    })
    .catch((err) => {
      res.status(404).send(err, 'error on deleting resource');
    });
  }


