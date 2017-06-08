//const mysql = require('mysql');
const models = require('../../db/models.js');

exports.addAnnouncement = (req, callback) => {
  models.Announcements.create({
      announcement: req.body.announcement,
      user_id: req.body.user_id,
      team_id: req.body.team_id
    }).then(announcement => {
      callback(null, announcement.dataValues);
    }).catch(err => {
      callback(err, null);
    });
};

exports.getAnnouncementsByTeamId = (params, callback) => {
  return models.Announcements.findAll({
      where: {
        team_id: params.team_id
      }
    }).then(announcements => {
      callback(announcements);
    });
};

exports.updateAnnouncement = (req, callback) => {
  models.Announcements.findOne({
      where: {
        id: req.params.announcement_id
      }
    }).then(announcement => {
      announcement.updateAttributes(req.body)
        .then(announcement => {
          callback(null, announcement.dataValues);
        }).catch(err => {
          callback(err, null);
        });
    });
};

exports.deleteAnnouncement = (params, callback) => {
  models.Announcements.destroy({
      where: {
        id: params.announcement_id
      }
    }).then(() => {
      callback("announcementDeleted");
    });
};