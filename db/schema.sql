CREATE DATABASE IF NOT EXISTS tiny_task;

USE tiny_task;

--hold users and auth0 tokens
CREATE TABLE IF NOT EXISTS users (
  auth_token TEXT NOT NULL,
  username TEXT NOT NULL,
  PRIMARY KEY (auth_token)
);

--holds teams and a bulletin board
CREATE TABLE IF NOT EXISTS teams (
  id INTEGER NOT NULL AUTO_INCREMENT,
  bulletin_board TEXT,
  PRIMARY KEY (id)
);

--join table to match teams up with members
CREATE TABLE IF NOT EXISTS team_members (
  team_id INTEGER NOT NULL,
  user_id INTEGER NOT NULL,
  FOREIGN KEY (team_id) REFERENCES teams(id),
  FOREIGN KEY (member_id) REFERENCES users(auth_token)
);

--holds messages, user ids and team ids
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER NOT NULL AUTO_INCREMENT,
  message TEXT NOT NULL,
  user_id INTEGER NOT NULL,
  team_id INTEGER NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (team_id) REFERENCES teams(id),
  FOREIGN KEY (user_id) REFERENCES users(auth_token)
);

--holds project
CREATE TABLE IF NOT EXISTS project (
  id INTEGER NOT NULL AUTO_INCREMENT,
  project_name TEXT NOT NULL,
);

--holds phases of projects ex phase 1, phase 2
CREATE TABLE IF NOT EXISTS phases (
  id INTEGER NOT NULL AUTO_INCREMENT,
  phases_name TEXT NOT NULL,
  project_id INTEGER NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (project_id) REFERENCES project(id),
  FOREIGN KEY (task_id) REFERENCES phases(id)
);

--holds task that pertain to a phase. One task can have one phases, a phase can have multiple tasks
CREATE TABLE IF NOT EXISTS tasks (
  id INTEGER NOT NULL AUTO_INCREMENT,
  task_name TEXT NOT NULL,
  phase_id TEXT,
  PRIMARY KEY (id),
  FOREIGN KEY (phase_id) REFERENCES phases(id)
);

--join table for users and the tasks they are assigned. One task can have multiple users, one user can have multiple tasks
CREATE TABLE IF NOT EXISTS users_tasks (
  user_id INTEGER NOT NULL,
  task_id INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(auth_token),
  FOREIGN KEY (task_id) REFERENCES tasks(id)
);

--join table for users and projects. One user can have multiple projects and one project can have multiple users
CREATE TABLE IF NOT EXISTS users_projects (
  user_id INTEGER NOT NULL,
  team_id INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(auth_token),
  FOREIGN KEY (team_id) REFERENCES teams(id)
);












