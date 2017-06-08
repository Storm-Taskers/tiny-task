const helper = require('../helpers/announcements.js');

exports.announcements = {
  retrieveAnnouncements: (req, res) => {
    helper.getAnnouncementsByTeamId(req.params, announcements => {
      res.send(announcements);
    });
  },
  createNewAnnouncements: (req, res) => {
    helper.addAnnouncement(req, (err, result) => {
      if (err) {
        return res.status(500).send("server error");
      } else if (typeof isSeed === "function") {
        res.status(200).send(result);
        res.end();
      } else {
        console.log("seed announcement added");
        res.end();
      }
    });
  },
  updateAnnouncements: (req, res) => {
    helper.updateAnnouncement(req, (err, result) => {
      if (err) {
        return res.status(500).send("server error");
      } else {
        console.log("seed announcement updated");
        res.status(200).send(result);
        res.end();
      }
    });
  },
  deleteAnnouncements: (req, res) => {
    helper.deleteAnnouncement(req.params, message => {
      res.status(200).send(message);
    });
  }
};