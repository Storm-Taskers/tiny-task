CREATE DATABASE IF NOT EXISTS tiny_task;

USE tiny_task;

--hold users and auth0 tokens
CREATE TABLE IF NOT EXISTS users (
  auth_token TEXT NOT NULL,
  user_profile_id INTEGER NOT NULL,
  PRIMARY KEY (auth_token),
  --FOREIGN KEY (user_profile_id) REFERENCES user_profile(id)
);

CREATE TABLE IF NOT EXISTS user_profile (
  id INTEGER NOT NULL AUTO_INCREMENT,
  full_name TEXT NOT NULL,
  email TEXT,
  user_status TEXT,
  user_availability TEXT NOT NULL,
  PRIMARY KEY (id)
);

--holds team & project name
CREATE TABLE IF NOT EXISTS teams (
  id INTEGER NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS projects (
  id INTEGER NOT NULL AUTO_INCREMENT,
  project_name TEXT,
  completion BOOLEAN,
  team_id INTEGER NOT NULL,
  PRIMARY KEY (id)
  FOREIGN KEY (team_id) REFERENCES teams(id),
);

--join table to match teams up with members
CREATE TABLE IF NOT EXISTS team_users (
  team_id INTEGER NOT NULL,
  user_id TEXT NOT NULL,
  FOREIGN KEY (team_id) REFERENCES teams(id),
  FOREIGN KEY (user_id) REFERENCES users(auth_token)
);

CREATE TABLE IF NOT EXISTS team_colors (
  id INTEGER NOT NULL,
  color TEXT NOT NULL,
  user_id TEXT NOT NULL,
  team_id INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(auth_token),
  FOREIGN KEY (team_id) REFERENCES teams(id)
);

--holds announcements for bulletin board
CREATE TABLE IF NOT EXISTS announcements (
  id INTEGER NOT NULL AUTO_INCREMENT,
  announcement TEXT NOT NULL,
  user_id TEXT NOT NULL,
  team_id INTEGER NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(auth_token),
  FOREIGN KEY (team_id) REFERENCES teams(id)
);

--holds messages, user ids and team ids
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER NOT NULL AUTO_INCREMENT,
  message TEXT NOT NULL,
  user_id TEXT NOT NULL,
  team_id INTEGER NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (team_id) REFERENCES teams(id),
  FOREIGN KEY (user_id) REFERENCES users(auth_token)
);


--holds phases of projects ex phase 1, phase 2
CREATE TABLE IF NOT EXISTS phases (
  id INTEGER NOT NULL AUTO_INCREMENT,
  phase_name TEXT NOT NULL,
  phase_order INTEGER NOT NULL,
  phase_status TEXT,
  phase_color TEXT NOT NULL,
  project_id INTEGER NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (project_id) REFERENCES projects(id),
);

--holds task that pertain to a phase. One task can have one phase, a phase can have multiple tasks
CREATE TABLE IF NOT EXISTS tasks (
  id INTEGER NOT NULL AUTO_INCREMENT,
  task_name TEXT NOT NULL,
  task_status TEXT,
  phase_id INTEGER NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (phase_id) REFERENCES phases(id)
);

--join table for users and the tasks they are assigned. One task can have multiple users, one user can have multiple tasks
CREATE TABLE IF NOT EXISTS users_tasks (
  user_id TEXT NOT NULL,
  task_id INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(auth_token),
  FOREIGN KEY (task_id) REFERENCES tasks(id)
);

CREATE TABLE IF NOT EXISTS shared_resources (
  id INTEGER NOT NULL AUTO_INCREMENT,
  resource TEXT NOT NULL,
  type TEXT NOT NULL,
  user_id TEXT NOT NULL,
  team_id INTEGER NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(auth_token),
  FOREIGN KEY (team_id) REFERENCES teams(id)
);


ALTER TABLE 'users' ADD FOREIGN KEY (user_profile_id) REFERENCES 'user_profile'('id');









