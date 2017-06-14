const announcementHelper = require('../helpers/announcements.js');

exports.announcements = {
  retrieveAnnouncements: (req, res) => {
    announcementHelper.getAnnouncementsByTeamId(req.params, announcements => {
      res.send(announcements);
    });
  },
  createNewAnnouncements: (req, res, isSeed) => {
    announcementHelper.addAnnouncement(req, (err, result) => {
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
    console.log(req.body.announcementChanges.announcement, 'inside requesthandler');
    announcementHelper.updateAnnouncement(req.params.announcement_id, req.body.announcementChanges.announcement, (err, result) => {
      if (err) {
        return res.status(500).send("server error");
      } else {
        console.log(result, 'should be updated result');
        res.status(200).send(result);
        res.end();
      }
    });
  },
  deleteAnnouncements: (req, res) => {
    announcementHelper.deleteAnnouncement(req.params, message => {
      res.status(200).send(message);
    });
  }
};
