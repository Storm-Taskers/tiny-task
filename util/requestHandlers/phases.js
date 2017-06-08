const helper = require('../helpers/phases.js');

exports.phases = {

  createNewPhases: (req, res, isSeed) => {
    helper.addPhases(req, (err, result) => {
      if (err) {
        return res.status(500).send("server error");
      } else if (typeof isSeed === "function") {
        res.status(200).send(result);
        res.end();
      } else {
        console.log("seed phase added");
        res.end();
      }
    });
  },

  deletePhases: (req, res) => {
    helper.deletePhase(req.params, (err, message) => {
      if (err) {
        return res.status(500).send(err);
      } else {
        res.send(message).end();
      }
    });
  },

  updatePhases: (req, res) => {
    helper.updatePhase(req, (err, result) => {
      if (err) {
        return res.status(500).send("server error");
      } else {
        console.log("seed phase updated");
        res.status(200).send(result);
        res.end();
      }
    });
  }
};