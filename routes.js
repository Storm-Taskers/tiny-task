const router = require('express').Router();
const handler = require('./util/requestHandler.js');

// router.get('/', (req, res) => {
//   console.log('it works');
//   res.status(200).send('hello world');
// });

router.get('/users', handler.users.get);
router.post('/users', handler.users.post);
router.put('/users', handler.users.put);
router.delete('/users', handler.users.delete);

router.get('/teams', handler.teams.get);
router.post('/teams', handler.teams.post);
router.put('/teams', handler.teams.put);
router.delete('/teams', handler.teams.delete);

router.get('/messages', handler.messages.get);
router.post('/messages', handler.messages.post);
router.put('/messages', handler.messages.put);
router.delete('/messages', handler.messages.delete);

router.get('/announcements', handler.announcements.get);
router.post('/announcements', handler.announcements.post);
router.put('/announcements', handler.announcements.put);
router.delete('/announcements', handler.announcements.delete);

router.get('/projects', handler.projects.get);
router.post('/projects', handler.projects.post);
router.put('/projects', handler.projects.put);
router.delete('/projects', handler.projects.delete);

router.get('/phases', handler.phases.get);
router.post('/phases', handler.phases.post);
router.put('/phases', handler.phases.put);
router.delete('/phases', handler.phases.delete);

router.get('/tasks', handler.tasks.get);
router.post('/tasks', handler.tasks.post);
router.put('/tasks', handler.tasks.put);
router.delete('/tasks', handler.tasks.delete);

router.get('/resources', handler.resources.get);
router.post('/resources', handler.resources.post);
router.put('/resources', handler.resources.put);
router.delete('/resources', handler.resources.delete);

module.exports = router;










