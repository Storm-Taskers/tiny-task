/* You'll need to have MySQL running and your Node server running
 * for these tests to pass. */

var mysql = require('mysql');
var request = require('request'); // You might need to npm install the request module!
var expect = require('chai').expect;

describe('Persistent Node Server', function() {
  var dbConnection;

  beforeEach(function(done) {
    dbConnection = mysql.createConnection({
      user: 'root',
      password: '',
      database: 'tiny_task'
    });
    dbConnection.connect();

    var tablename = "users";

    /* Empty the db table before each test so that multiple tests
     * (or repeated runs of the tests) won't screw each other up: */
    dbConnection.query('truncate ' + tablename, done);
  });

  afterEach(function() {
    dbConnection.end();
  });

  it('Should insert new users to the DB', function(done) {
    request({
      method: 'POST',
      uri: 'http://127.0.0.1:8080/api/users',
      json: {
        full_name: 'John Smith',
        email: 'johnsmith@gmail.com',
        user_status: 'working',
        user_availability: true
      }
    }, function () {
      var queryString = 'SELECT * FROM users';
      var queryArgs = [];
      dbConnection.query(queryString, queryArgs, function(err, results) {
        if (err) { throw err; }
        expect(results.length).to.equal(1);
        expect(results[0].full_name).to.equal('John Smith');

        done();
      });
    });
  });

  it('Should output all users from the DB', function(done) {
    var queryString = "INSERT INTO user_profile (id, full_name, email, user_status, user_availability) VALUES ('John Smith', 'johnsmith@gmail.com', 'working', true)";
    var queryArgs = [];
    dbConnection.query(queryString, queryArgs, function(err, results) {
      if (err) { throw err; }
      request('http://127.0.0.1:8080/api/users', function(error, response, body) {
        var userInfo = JSON.parse(body);
        expect(userInfo[0].full_name).to.equal('John Smith');
        expect(userInfo[0].email).to.equal('johnsmith@gmail.com');
        done();
      });
    });
  });

  // it('Should update user profile on DB', function(done) {
  //   request({
  //     method: 'PUT',
  //     uri: 'http://127.0.0.1:8080/users'
  //   })
  // })

//update userProfile
//delete userProfile


// beforeEach(function(done) {
//   dbConnection = mysql.createConnection({
//       user: 'root',
//       password: '',
//       database: 'tiny_task'
//   });
//   dbConnection.connect();
//   var tablename = "teams";
//   dbConnection.query('truncate ' + tablename, done);
// });
// afterEach(function() {
//   dbConnection.end();
// });
//create new team
//retrieve all team
//update team
//delete team


// beforeEach(function(done) {
//   dbConnection = mysql.createConnection({
//       user: 'root',
//       password: '',
//       database: 'tiny_task'
//   });
//   dbConnection.connect();
//   var tablename = "projects";
//   dbConnection.query('truncate ' + tablename, done);
// });
// afterEach(function() {
//   dbConnection.end();
// });
//create new project
//retrieve all project
//update project
//delete project


// beforeEach(function(done) {
//   dbConnection = mysql.createConnection({
//       user: 'root',
//       password: '',
//       database: 'tiny_task'
//   });
//   dbConnection.connect();
//   var tablename = "team_users";
//   dbConnection.query('truncate ' + tablename, done);
// });
// afterEach(function() {
//   dbConnection.end();
// });
//create new team_users
//retrieve all team_users
//update team_users
//delete team_users


// beforeEach(function(done) {
//   dbConnection = mysql.createConnection({
//       user: 'root',
//       password: '',
//       database: 'tiny_task'
//   });
//   dbConnection.connect();
//   var tablename = "team_colors";
//   dbConnection.query('truncate ' + tablename, done);
// });
// afterEach(function() {
//   dbConnection.end();
// });
//create new team_color
//retrieve all team_color
//update team_color
//delete team_color


// beforeEach(function(done) {
//   dbConnection = mysql.createConnection({
//       user: 'root',
//       password: '',
//       database: 'tiny_task'
//   });
//   dbConnection.connect();
//   var tablename = "announcements";
//   dbConnection.query('truncate ' + tablename, done);
// });
// afterEach(function() {
//   dbConnection.end();
// });
//create new announcement
//retrieve all announcement
//update announcement
//delete announcement


// beforeEach(function(done) {
//   dbConnection = mysql.createConnection({
//       user: 'root',
//       password: '',
//       database: 'tiny_task'
//   });
//   dbConnection.connect();
//   var tablename = "messages";
//   dbConnection.query('truncate ' + tablename, done);
// });
// afterEach(function() {
//   dbConnection.end();
// });
//create new message
//retrieve all message
//update message
//delete message


// beforeEach(function(done) {
//   dbConnection = mysql.createConnection({
//       user: 'root',
//       password: '',
//       database: 'tiny_task'
//   });
//   dbConnection.connect();
//   var tablename = "phases";
//   dbConnection.query('truncate ' + tablename, done);
// });
// afterEach(function() {
//   dbConnection.end();
// });
//create new phase
//retrieve all phase
//update phase
//delete phase


// beforeEach(function(done) {
//   dbConnection = mysql.createConnection({
//       user: 'root',
//       password: '',
//       database: 'tiny_task'
//   });
//   dbConnection.connect();
//   var tablename = "tasks";
//   dbConnection.query('truncate ' + tablename, done);
// });
// afterEach(function() {
//   dbConnection.end();
// });
//create new task
//retrieve all task
//update task
//delete task


// beforeEach(function(done) {
//   dbConnection = mysql.createConnection({
//       user: 'root',
//       password: '',
//       database: 'tiny_task'
//   });
//   dbConnection.connect();
//   var tablename = "users_tasks";
//   dbConnection.query('truncate ' + tablename, done);
// });
// afterEach(function() {
//   dbConnection.end();
// });
//create new user_task
//retrieve all user_task
//update user_task
//delete user_task


// beforeEach(function(done) {
//   dbConnection = mysql.createConnection({
//       user: 'root',
//       password: '',
//       database: 'tiny_task'
//   });
//   dbConnection.connect();
//   var tablename = "shared_resource";
//   dbConnection.query('truncate ' + tablename, done);
// });
// afterEach(function() {
//   dbConnection.end();
// });
//create new shared_resource
//retrieve all shared_resource
//update shared_resource
//delete shared_resource

















});
