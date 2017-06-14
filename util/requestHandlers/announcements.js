const announcementHelper = require('../helpers/announcements.js');
const userHelper = require('../helpers/users.js');

exports.announcements = {
  retrieveAnnouncements: (req, res) => {
    let announcementData = {};
    announcementHelper.getAnnouncementsByTeamId(req.params, announcements => {
      announcementData.announcement_info = announcements;
      let index = 0;
      announcements.forEach(announcement => {
        userHelper.retrieveUserProfile(announcement.dataValues.user_id, (userProfile) => {
          console.log(announcement.dataValues.user_id, 'userId');
          console.log(userProfile, 'userProfile');
          announcementData.user_info = userProfile;
          index++;
          if(index === announcements.length-1) {
            res.send(announcementData);
          }
        });
      });
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
    announcementHelper.updateAnnouncement(req, (err, result) => {
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
    announcementHelper.deleteAnnouncement(req.params, message => {
      res.status(200).send(message);
    });
  }
};
