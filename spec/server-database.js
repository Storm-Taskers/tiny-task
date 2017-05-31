/* You'll need to have MySQL running and your Node server running
 * for these tests to pass. */


const mysql = require('mysql');
const request = require('request');
const expect = require('chai').expect;

describe('User Table', () => {
  let dbConnection;

  beforeEach((done) => {
    dbConnection = mysql.createConnection({
      user: 'root',
      password: '',
      database: 'tiny_task'
    });
    dbConnection.connect();

    let tablename = 'users';

    //empty database before inserting
    dbConnection.query('truncate ' + tablename, done);
  });

  afterEach(() => {
    dbConnection.end();
  });

  it('Should insert new users to the DB', (done) => {
    request({
      method: 'POST',
      uri: 'http://127.0.0.1:8080/api/users',
      json: { auth_token: 'temp' }
    }, () => {
      let queryString = 'SELECT * FROM users';
      let queryArgs = [];
      dbConnection.query(queryString, queryArgs, (err, results) => {
        if (err) { throw err; }
        expect(results.length).to.equal(1);
        done();
      });
    });
  });
});
//----------------------------------------------------------------------------------------------------------
describe('User Profile Table', () => {
  let dbConnection;

  beforeEach((done) => {
    dbConnection = mysql.createConnection({
      user: 'root',
      password: '',
      database: 'tiny_task'
    });
    dbConnection.connect();

    let tablename = 'user_profiles';

 var connection = new Sequelize('tiny_task', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
  });

describe('User Profile Table', function () {


  beforeEach(function (done) {

    connection.sync({
      force: true
    }).then(function () {
      done();
    });
  });

  connection.authenticate()
    .then(function () {
      console.log('connection has been established successfully');
    })
    .catch(function (err) {
      console.log('Unable to connect to DB', err);
    });

  it('Should insert new users to the DB', function (done) {
    request({
      method: 'POST',
      uri: 'http://127.0.0.1:8080/api/users',
      json: {
        full_name: 'John Smith',
        email: 'johnsmith@gmail.com',
        user_status: null,
        user_availability: true
      }
    }).end((function (err, res) {
      console.log(res, res);
      console.log(err, 'err');
        expect(res.body.length).to.equal(1);
        expect(res.body[0].full_name).to.equal('John Smith');
        done();
      }));
  });


  // it('Should output all users from the DB', function (done) {
  //   request({
  //     method: 'GET',
  //     uri: 'http://127.0.0.1:8080/api/users',
  //   }, function () {
  //     var queryString = 'SELECT * FROM user_profiles';
  //     var queryArgs = [];
  //     connection.query(queryString, queryArgs, function (err, results) {
  //       if (err) { throw err; }
  //       request('http://127.0.0.1:8080/api/users', function (error, response) {
  //         var userInfo = response;
  //         console.log(response, 'res');
  //         expect(userInfo[0].full_name).to.equal('John Smith');
  //         expect(userInfo[0].email).to.equal('johnsmith@gmail.com');
  //         done();
  //       });
  //     });
  //   });
  // });

  // it('Should update user profile on DB', (done) => {
  //   request({
  //     method: 'PUT',
  //     uri: 'http://127.0.0.1:8080/users',
  //     json: { user_availability: false }
  //   }, () => {
  //     let queryString = 'SELECT * FROM user_profiles WHERE full_name = John Smith';
  //     let queryArgs = [];
  //     dbConnection.query(queryString, queryArgs, (err, response, body) => {
  //       if (err) { throw err; };
  //       let userInfo = JSON.parse(body);
  //       expect(userInfo[0].user_availability).to.equal(false);
  //       done();
  //     });
  //   });
  // });

  // it('Should delete user profile on DB', (done) => {
  //   request({
  //     method: 'DELETE',
  //     uri: 'htp://127.0.0.1:8080/users',
  //   }, () => {
  //     let queryString = 'DELETE FROM user_profile WHERE full_name = John Smith and email = johnsmith@gmail.com';
  //     let queryArgs = [];
  //     dbConnection.query(queryString, queryArgs, (err, results) => {
  //       if (err) { throw err; };
  //       expect(results.length).to.equal(0);
  //     });
  //   });
  // });


});
//----------------------------------------------------------------------------------------------------------
// describe('User Table', function () {
//   this.timeout(15000);
//   var connection;

//   beforeEach(function (done) {

//     connection = new Sequelize('tiny_task', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql'
//     });


//     connection.authenticate()
//       .then(function () {
//         console.log('connection has been established successfully');
//       })
//       .catch(function (err) {
//         console.log('Unable to connect to DB', err);
//       });

//     var tablename = 'users';

//     empty database before inserting
//     connection.query('SET FOREIGN_KEY_CHECKS = 0')
//     .then(function () {
//       return connection.query('SET FOREIGN_KEY_CHECKS = 1');
//     })
//     .then(function () {
//       console.log('database synchronised');
//     }, (err) => {
//       console.log(err);
//     });
//   });

//   afterEach(function () {
//     connection.close();
//   });

//   it('Should insert new users to the DB', function (done)  {
//     request({
//       method: 'POST',
//       uri: 'http://127.0.0.1:8080/api/users',
//       json: { auth_token: 'temp' }
//     }, () => {
//       var queryString = 'SELECT * FROM users';
//       var queryArgs = [];
//       connection.query(queryString, queryArgs, function (err, results) {
//         if(err) { throw err; }
//         expect(results.length).to.equal(1);
//         done();
//       });
//     });
//   });
// });
//----------------------------------------------------------------------------------------------------------
//describe('Teams Table', () => {
//   let dbConnection;
//  beforeEach(function(done) {
//   dbConnection = mysql.createConnection({
//       user: 'root',
//       password: '',
//       database: 'tiny_task'
//   });
//   dbConnection.connect();
//   let tablename = "teams";
//   dbConnection.query('truncate ' + tablename, done);
// });
// afterEach(function() {
//   dbConnection.end();
// });
//   it('Should insert new teams to the DB', (done) => {
//     request({
//       method: 'POST',
//       uri: 'http://127.0.0.1:8080/api/teams',
//     }, () => {
//       let queryString = 'SELECT * FROM teams';
//       let queryArgs = [];
//       dbConnection.query(queryString, queryArgs, (err, results) => {
//         if (err) { throw err; }
//         expect(results.length).to.equal(1);
//         done();
//       });
//     });
//   });

//   it('Should output all teams from the DB', (done) => {
//     request({
//       method: 'GET',
//       uri: 'http://127.0.0.1:8080/api/teams',
//     }, () => {
//       let queryString = "INSERT INTO teams (id) VALUES (1)";
//       let queryArgs = [];
//       dbConnection.query(queryString, queryArgs, (err, results) => {
//         if (err) { throw err; }
//         request('http://127.0.0.1:8080/api/teams', (error, response, body) => {
//           let teamInfo = JSON.parse(body);
//           expect(teamInfo[0].id).to.equal(1);
//           done();
//         });
//       });
//     });
//   });


//   it('Should delete team on DB', (done) => {
//     request({
//       method: 'DELETE',
//       uri: 'htp://127.0.0.1:8080/teams',
//     }, () => {
//       let queryString = 'DELETE FROM teams WHERE id = 1';
//       let queryArgs = [];
//       dbConnection.query(queryString, queryArgs, (err, results) => {
//         if (err) { throw err; };
//         expect(results.length).to.equal(0);
//       });
//     });
//   });
//});
//----------------------------------------------------------------------------------------------------------
// describe('Projects Table', () => {
//   let dbConnection;
// beforeEach(function(done) {
//   dbConnection = mysql.createConnection({
//       user: 'root',
//       password: '',
//       database: 'tiny_task'
//   });
//   dbConnection.connect();
//   let tablename = "projects";
//   dbConnection.query('truncate ' + tablename, done);
// });
// afterEach(function() {
//   dbConnection.end();
// });
//   it('Should insert new projects to the DB', (done) => {
//     request({
//       method: 'POST',
//       uri: 'http://127.0.0.1:8080/api/projects',
//       json: {
//         project_name: 'Tiny Task',
//         completion: false,
//         team_id: 1,
//       }
//     }, () => {
//       let queryString = 'SELECT * FROM projects';
//       let queryArgs = [];
//       dbConnection.query(queryString, queryArgs, (err, results) => {
//         if (err) { throw err; }
//         expect(results.length).to.equal(1);
//         expect(results[0].project_name).to.equal('Tiny Task');

//         done();
//       });
//     });
//   });

//   it('Should output all projects from the DB', (done) => {
//     request({
//       method: 'GET',
//       uri: 'http://127.0.0.1:8080/api/projects',
//     }, () => {
//       let queryString = "INSERT INTO projects (project_name, completion, team_id) VALUES ('Tiny Task', false, 1)";
//       let queryArgs = [];
//       dbConnection.query(queryString, queryArgs, (err, results) => {
//         if (err) { throw err; }
//         request('http://127.0.0.1:8080/api/projects', (error, response, body) => {
//           let projectInfo = JSON.parse(body);
//           expect(projectInfo[0].project_name).to.equal('Tiny Task');
//           expect(projectInfo[0].completion).to.equal(false);
//           done();
//         });
//       });
//     });
//   });

//   it('Should update project on DB', (done) => {
//     request({
//       method: 'PUT',
//       uri: 'http://127.0.0.1:8080/projects',
//       json: { completion: true }
//     }, () => {
//       let queryString = 'SELECT * FROM projects WHERE project_name = Tiny Task';
//       let queryArgs = [];
//       dbConnection.query(queryString, queryArgs, (err, response, body) => {
//         if (err) { throw err; };
//         let projectInfo = JSON.parse(body);
//         expect(projectInfo[0].completion).to.equal(true);
//         done();
//       });
//     });
//   });

//   it('Should delete project on DB', (done) => {
//     request({
//       method: 'DELETE',
//       uri: 'htp://127.0.0.1:8080/projects',
//     }, () => {
//       let queryString = 'DELETE FROM user_profile WHERE project_name = Tiny Task';
//       let queryArgs = [];
//       dbConnection.query(queryString, queryArgs, (err, results) => {
//         if (err) { throw err; };
//         expect(results.length).to.equal(0);
//       });
//     });
//   });
//});
//----------------------------------------------------------------------------------------------------------
// describe('Team Colors Table', () => {
//   let dbConnection;
// beforeEach(function(done) {
//   dbConnection = mysql.createConnection({
//       user: 'root',
//       password: '',
//       database: 'tiny_task'
//   });
//   dbConnection.connect();
//   let tablename = "team_colors";
//   dbConnection.query('truncate ' + tablename, done);
// });
// afterEach(function() {
//   dbConnection.end();
// });
//  it('Should insert new projects to the DB', (done) => {
//     request({
//       method: 'POST',
//       uri: 'http://127.0.0.1:8080/api/projects',
//       json: {
//         project_name: 'Tiny Task',
//         completion: false,
//         team_id: 1,
//       }
//     }, () => {
//       let queryString = 'SELECT * FROM projects';
//       let queryArgs = [];
//       dbConnection.query(queryString, queryArgs, (err, results) => {
//         if (err) { throw err; }
//         expect(results.length).to.equal(1);
//         expect(results[0].project_name).to.equal('Tiny Task');

//         done();
//       });
//     });
//   });

//   it('Should output all projects from the DB', (done) => {
//     request({
//       method: 'GET',
//       uri: 'http://127.0.0.1:8080/api/projects',
//     }, () => {
//       let queryString = "INSERT INTO projects (project_name, completion, team_id) VALUES ('Tiny Task', false, 1)";
//       let queryArgs = [];
//       dbConnection.query(queryString, queryArgs, (err, results) => {
//         if (err) { throw err; }
//         request('http://127.0.0.1:8080/api/projects', (error, response, body) => {
//           let projectInfo = JSON.parse(body);
//           expect(projectInfo[0].project_name).to.equal('Tiny Task');
//           expect(projectInfo[0].completion).to.equal(false);
//           done();
//         });
//       });
//     });
//   });

//   it('Should update project on DB', (done) => {
//     request({
//       method: 'PUT',
//       uri: 'http://127.0.0.1:8080/projects',
//       json: { completion: true }
//     }, () => {
//       let queryString = 'SELECT * FROM projects WHERE project_name = Tiny Task';
//       let queryArgs = [];
//       dbConnection.query(queryString, queryArgs, (err, response, body) => {
//         if (err) { throw err; };
//         let projectInfo = JSON.parse(body);
//         expect(projectInfo[0].completion).to.equal(true);
//         done();
//       });
//     });
//   });

//   it('Should delet project on DB', (done) => {
//     request({
//       method: 'DELETE',
//       uri: 'htp://127.0.0.1:8080/projects',
//     }, () => {
//       let queryString = 'DELETE FROM user_profile WHERE project_name = Tiny Task';
//       let queryArgs = [];
//       dbConnection.query(queryString, queryArgs, (err, results) => {
//         if (err) { throw err; };
//         expect(results.length).to.equal(0);
//       });
//     });
//   });
//});
//----------------------------------------------------------------------------------------------------------
// describe('Announcements Table', () => {
//   let dbConnection;
// beforeEach(function(done) {
//   dbConnection = mysql.createConnection({
//       user: 'root',
//       password: '',
//       database: 'tiny_task'
//   });
//   dbConnection.connect();
//   let tablename = "announcements";
//   dbConnection.query('truncate ' + tablename, done);
// });
// afterEach(function() {
//   dbConnection.end();
// });
//create new announcement
//retrieve all announcement
//update announcement
//delete announcement
//});
//----------------------------------------------------------------------------------------------------------
// describe('Messages Table', () => {
//   let dbConnection;
// beforeEach(function(done) {
//   dbConnection = mysql.createConnection({
//       user: 'root',
//       password: '',
//       database: 'tiny_task'
//   });
//   dbConnection.connect();
//   let tablename = "messages";
//   dbConnection.query('truncate ' + tablename, done);
// });
// afterEach(function() {
//   dbConnection.end();
// });
//create new message
//retrieve all message
//update message
//delete message
//});
//----------------------------------------------------------------------------------------------------------
// describe('Phases Table', () => {
//   let dbConnection;
// beforeEach(function(done) {
//   dbConnection = mysql.createConnection({
//       user: 'root',
//       password: '',
//       database: 'tiny_task'
//   });
//   dbConnection.connect();
//   let tablename = "phases";
//   dbConnection.query('truncate ' + tablename, done);
// });
// afterEach(function() {
//   dbConnection.end();
// });
//create new phase
//retrieve all phase
//update phase
//delete phase
//});
//----------------------------------------------------------------------------------------------------------
// describe('Tasks Table', () => {
//   let dbConnection;
// beforeEach(function(done) {
//   dbConnection = mysql.createConnection({
//       user: 'root',
//       password: '',
//       database: 'tiny_task'
//   });
//   dbConnection.connect();
//   let tablename = "tasks";
//   dbConnection.query('truncate ' + tablename, done);
// });
// afterEach(function() {
//   dbConnection.end();
// });
//create new task
//retrieve all task
//update task
//delete task
//});
//----------------------------------------------------------------------------------------------------------
// describe('User Task Table', () => {
//   let dbConnection;
// beforeEach(function(done) {
//   dbConnection = mysql.createConnection({
//       user: 'root',
//       password: '',
//       database: 'tiny_task'
//   });
//   dbConnection.connect();
//   let tablename = "users_tasks";
//   dbConnection.query('truncate ' + tablename, done);
// });
// afterEach(function() {
//   dbConnection.end();
// });
//create new user_task
//retrieve all user_task
//update user_task
//delete user_task
//});
//----------------------------------------------------------------------------------------------------------
// describe('Shared Resource Table', () => {
//   let dbConnection;
// beforeEach(function(done) {
//   dbConnection = mysql.createConnection({
//       user: 'root',
//       password: '',
//       database: 'tiny_task'
//   });
//   dbConnection.connect();
//   let tablename = "shared_resource";
//   dbConnection.query('truncate ' + tablename, done);
// });
// afterEach(function() {
//   dbConnection.end();
// });
//create new shared_resource
//retrieve all shared_resource
//update shared_resource
//delete shared_resource
//});
