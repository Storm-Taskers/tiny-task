const helper = require('../helpers/messages.js');

// exports.messages = {
//   retrieveMessages: (req, res) => {
//     helper.retrieveMessage(req, () => {
//       res.end(JSON.stringify(res.body));
//     }).then((message) => {
//       res.status(200).send('message retrieved');
//     }).catch((err) => {
//       res.status(404).send(err, 'error retrieving message');
//     });
//   },
//   createNewMessages: (req, res) => {
//     helper.addMessage(req.body, () => {
//       res.end(JSON.stringify(res.body));
//     }).then((message) => {
//       res.status(200).send('message added');
//     }).catch((err) => {
//       res.status(404).send(err, 'error on creating message');
//     });
//   },
//   updateMessages: (req, res) => {
//     helper.updateMessage(req.body, () => {
//       res.end(JSON.stringify(res.body));
//     }).then((message) => {
//       res.status(200).send('message updated');
//     }).catch((err) => {
//       res.status(404).send(err, 'error on updating message');
//     });
//   },
//   deleteMessages: (req, res) => {
//     helper.deleteMessage(req, () => {
//       res.end(JSON.stringify(res.body));
//     }).then((message) => {
//       res.status(200).send('message deleted');
//     }).catch((err) => {
//       res.status(404).send(err, 'error on deleting message');
//     });
//   }
// };