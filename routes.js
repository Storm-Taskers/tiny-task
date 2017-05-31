const router = require('express').Router();
const handler = require('./util/requestHandler.js');

router.get('/users', handler.users.retrieveUser);
router.post('/users', handler.users.createNewUser);
router.put('/users', handler.users.updateUser);
router.delete('/users', handler.users.deleteUser);


// router.get('/teams', handler.teams.retrieveTeams);
// router.post('/teams', handler.teams.createNewTeams);
// router.put('/teams', handler.teams.updateTeams);
// router.delete('/teams', handler.teams.deleteTeams);

// router.get('/messages', handler.messages.retrieveMessages);
// router.post('/messages', handler.messages.createNewMessages);
// router.put('/messages', handler.messages.updateMessages);
// router.delete('/messages', handler.messages.deleteMessages);

// router.get('/announcements', handler.announcements.retrieveAnnouncements);
// router.post('/announcements', handler.announcements.createNewAnnouncements);
// router.put('/announcements', handler.announcements.updateAnnouncements);
// router.delete('/announcements', handler.announcements.deleteAnnouncements);

// router.get('/projects', handler.projects.retrieveProjects);
// router.post('/projects', handler.projects.createNewProjects);
// router.put('/projects', handler.projects.updateProjects);
// router.delete('/projects', handler.projects.deleteProjects);

// router.get('/phases', handler.phases.retrievePhases);
// router.post('/phases', handler.phases.createNewPhases);
// router.put('/phases', handler.phases.updatePhases);
// router.delete('/phases', handler.phases.deletePhases);

// router.get('/tasks', handler.tasks.retrieveTasks);
// router.post('/tasks', handler.tasks.createNewTasks);
// router.put('/tasks', handler.tasks.updateTasks);
// router.delete('/tasks', handler.tasks.deleteTasks);

// router.get('/resources', handler.resources.retrieveResources);
// router.post('/resources', handler.resources.createNewResources);
// router.put('/resources', handler.resources.updateResources);
// router.delete('/resources', handler.resources.deleteResources);

module.exports = router;










