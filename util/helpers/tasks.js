//const mysql = require('mysql');
const models = require('../../db/models.js');

exports.retrieveTasksByPhaseId = (params, callback) => {
  return models.Tasks.findAll({
      where: {
        phase_id: params.phase_id
      }
    }).then((phases) => {
      callback(phases);
    });
};

exports.retrieveTaskByTaskId = (task_id, callback) => {
  return models.Tasks.findOne({
      where: {
        id: task_id
      }
    }).then((task) => {
      callback(task);
    });
};

retrieveTasksByUserId = (user_id, callback) => {
  return models.User_Tasks.findAll({
      where: {
        user_id: user_id
      }
    }).then((task) => {
      callback(task);
    });
};

exports.retrieveTaskUser = (task_id, callback) => {
  models.User_Tasks.findAll({
      where: {
        task_id: task_id
      }
    }).then((users) => {
      callback(users);
    });
};

exports.addUserTasks = (user_id, stage, task_id, callback) => {
  models.User_Tasks.create({
      user_id: user_id,
      task_id: task_id,
      stage: stage
    }).then((results) => {
      callback(results);
    });
};

exports.addTask = (body, phase_id, callback) => {
  console.log(body.task_name);
  models.Tasks.create({
      task_name: body.task_name,
      task_status: body.task_status,
      task_color: body.task_color,
      phase_id: phase_id
    }).then((result) => {
      callback(result);
    });
};

exports.updateTask = (task_id, changes, callback) => {
  let taskId = task_id;
  console.log(changes);
  models.Tasks.findOne({
      where: {
        id: taskId
      }
    }).then(task => {
      task.updateAttributes({
          task_name: changes.task_name,
          task_status: changes.task_status,
          task_color: changes.task_color,
          phase_id: changes.phase_id
        }).then(task => {
          models.Tasks.findOne({
              where: {
                id: taskId
              }
            }).then((task) => {
              callback(task);
            });
        });
    });
};

exports.deleteTaskUser = (user_id, task_id, callback) => {
  models.User_Tasks.destroy({
      where: {
        user_id: user_id,
        task_id: task_id
      }
    }).then(result => {
      callback(null, "user deleted from task");
    }).catch((err) => {
      callback(err, null);
    });
};

exports.deleteTask = (task_id, callback) => {
  models.Tasks.destroy({
      where: {
        id: task_id
      }
    }).then(() => {
      callback("taskDeleted");
    });
};