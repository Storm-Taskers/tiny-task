const router = require('express').Router();
const handler = require('./util/requestHandler.js');


// router.get('/login', -)

//////////USERS/////////////////
router.get('/users/:auth_token', handler.users.retrieveUser);
router.post('/users', handler.users.createNewUser);
// router.put('/users', handler.users.updateUser);
// router.delete('/users', handler.users.deleteUser);


//////////TEAMS/////////////////
router.get('/teams', handler.teams.retrieveTeams);
router.post('/teams', handler.teams.createNewTeams);
router.put('/teams', handler.teams.updateTeams);
// router.delete('/api/teams', handler.teams.deleteTeams);


//////////PROJECTS/////////////////
router.get('/projects/:project_id', handler.projects.retrieveProjectById);
router.post('/projects', handler.projects.createNewProjects);
router.put('/projects/:project_id', handler.projects.updateProjects);
router.delete('/projects/:project_id', handler.projects.deleteProjects);


//////////PHASES/////////////////
//router.get('/phases/:project_id', handler.phases.retrievePhasesByProjectId);
router.post('/phases/:project_id', handler.phases.createNewPhases);
router.put('/phases/:phase_id', handler.phases.updatePhases);
router.delete('/phases/:phase_id', handler.phases.deletePhases);


//////////TASKS/////////////////
router.post('/tasks', handler.tasks.createNewTasks);
router.get('/tasks/phase/:phase_id', handler.tasks.retrieveTasksByPhaseId);
router.put('/tasks', handler.tasks.updateTasks);
//router.delete('/tasks', handler.tasks.deleteTasks);


//////////MESSAGES/////////////////
// router.get('/api/messages', handler.messages.retrieveMessages);
// router.post('/api/messages', handler.messages.createNewMessages);
// router.delete('/api/messages', handler.messages.deleteMessages);


//////////ANNOUNCEMENTS/////////////////
// router.get('/api/announcements', handler.announcements.retrieveAnnouncements);
// router.post('/api/announcements', handler.announcements.createNewAnnouncements);
// router.put('/api/announcements', handler.announcements.updateAnnouncements);
// router.delete('/api/announcements', handler.announcements.deleteAnnouncements);


//////////RESOURCES/////////////////
// router.get('/resources', handler.resources.retrieveResources);
// router.post('/resources', handler.resources.createNewResources);
// router.put('/resources', handler.resources.updateResources);
// router.delete('/resources', handler.resources.deleteResources);

module.exports = router;
