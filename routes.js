const router = require("express").Router();
const handler = require("./util/requestHandler.js");

// router.get('/login', -)

//////////USERS/////////////////
router.get("/users/:auth_token", handler.users.retrieveUser);
router.post("/users/", handler.users.createNewUser);
router.put("/users/:user_id", handler.users.updateUser);
router.delete("/users/:user_id", handler.users.deleteUser);

//////////TEAMS/////////////////
router.get("/teams/:team_id", handler.teams.retrieveTeams);
router.get("/teams/users/:user_id", handler.users.getUserTeams);
router.post("/teams", handler.teams.createNewTeams);
router.put("/teams/:team_id", handler.teams.updateTeams);
router.delete("/teams/:team_id", handler.teams.deleteTeams);
router.delete("/teams/users/:user_id/:team_id", handler.users.deleteTeamUsers);

//////////PROJECTS/////////////////
router.get("/projects/:project_id", handler.projects.retrieveProjectById);
router.post("/projects", handler.projects.createNewProjects);
router.put("/projects/:project_id", handler.projects.updateProjects);
router.delete("/projects/:project_id", handler.projects.deleteProjects);

//////////PHASES/////////////////
router.post("/phases/:project_id", handler.phases.createNewPhases);
router.put("/phases/:phase_id", handler.phases.updatePhases);
router.delete("/phases/:phase_id", handler.phases.deletePhases);

//////////TASKS/////////////////
router.get("/tasks/:phase_id", handler.tasks.retrieveTasksByPhaseId);
//router.get('/tasks/users/:user_id', handler.users.getUserTasks);
router.post("/tasks/:phase_id", handler.tasks.createNewTasks);
router.put("/tasks/:task_id", handler.tasks.updateTasks);
router.delete("/tasks/:task_id", handler.tasks.deleteTasks);
router.delete("/tasks/users/:user_id/:task_id", handler.users.deleteTaskUsers);

////////ANNOUNCEMENTS/////////////////
router.get(
  "/api/announcements/team_id",
  handler.announcements.retrieveAnnouncements
);
router.post("/api/announcements", handler.announcements.createNewAnnouncements);
// router.put('/api/announcements', handler.announcements.updateAnnouncements);
// router.delete('/api/announcements', handler.announcements.deleteAnnouncements);

//////////MESSAGES/////////////////
// router.get('/api/messages', handler.messages.retrieveMessages);
// router.post('/api/messages', handler.messages.createNewMessages);
// router.delete('/api/messages', handler.messages.deleteMessages);

//////////RESOURCES/////////////////
// router.get('/resources', handler.resources.retrieveResources);
// router.post('/resources', handler.resources.createNewResources);
// router.put('/resources', handler.resources.updateResources);
// router.delete('/resources', handler.resources.deleteResources);

module.exports = router;
