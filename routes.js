const router = require('express').Router();
const handler = require('./util/requestHandler.js');

// router.get('/', (req, res) => {
//   console.log('it works');
//   res.status(200).send('hello world');
// });

router.get('/users' handler.messages.get);
router.post('/users' handler.messages.post);
router.put('/users' handler.messages.put);
router.delete('/users' handler.messages.delete);

router.get('/teams' handler.messages.get);
router.post('/teams' handler.messages.post);
router.put('/teams' handler.messages.put);
router.delete('/teams' handler.messages.delete);

router.get('/messages' handler.messages.get);
router.post('/messages' handler.messages.post);
router.put('/messages' handler.messages.put);
router.delete('/messages' handler.messages.delete);

router.get('/announcements' handler.messages.get);
router.post('/announcements' handler.messages.post);
router.put('/announcements' handler.messages.put);
router.delete('/announcements' handler.messages.delete);

router.get('/projects' handler.messages.get);
router.post('/projects' handler.messages.post);
router.put('/projects' handler.messages.put);
router.delete('/projects' handler.messages.delete);

router.get('/phases' handler.messages.get);
router.post('/phases' handler.messages.post);
router.put('/phases' handler.messages.put);
router.delete('/phases' handler.messages.delete);

router.get('/tasks' handler.messages.get);
router.post('/tasks' handler.messages.post);
router.put('/tasks' handler.messages.put);
router.delete('/tasks' handler.messages.delete);

router.get('/resources' handler.messages.get);
router.post('/resources' handler.messages.post);
router.put('/resources' handler.messages.put);
router.delete('/resources' handler.messages.delete);

module.exports = router;










