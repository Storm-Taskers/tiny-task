# tiny-task

## Team

  - __Product Owner__: [Kevin Nguyen]()
  - __Scrum Master__: [Brian Leung]()
  - __Development Team Members__: [Beth Stevic](), [David Hsiao]()

## Table of Contents
1. [API Routes](#routes)
    1. [Users](#users)
    1. [Projects](#projects)
    1. [Phases](#phases)
    1. [Tasks](#tasks)

## Routes
Content-type: json/application

### Users
* #### `GET /api/users/:auth_token`
Retrieve User Profile

Request Example:
```JSON
{
  "auth_token": "google-auth0-2903","
}
```

Response Example:
```JSON
{
  "user_profile": {
    "full_name": "Kevin Nguyen",
    "email": "kev_win@gmail.com",
    "user_availability": "true",
    "user_status": "Working"
  },
  "project_ids": [1, 2, 3, 4]
}
```


* #### `POST /api/users`
Create a user

Request Example:
```JSON
{
  "auth_token": "google-auth0-2903",
  "full_name": "Kevin Nguyen",
  "email": "kevinn@tinytask.com",
  "user_status": "slacking off",
  "user_availability: false
}
```

Response Example:
```JSON
{
  "something": "User Added"
}
```

* #### `PUT /api/users`
Updates a user

Request Example:
```JSON
{
  "auth_token": "google-auth0-2903",
  "full_name": "Kevin Nguyen"
}
```

Response Example:
  {}

* #### `DELETE /api/users`
Delete a User

Request Example:
```JSON
{
  "auth_token": "google-auth0-2903",
}
```

Response Example:
  "Deleted User"

### Projects
* #### `GET /api/projects/:project_id`
Retrieve a project

Request Example:
```JSON
{
  "projectId": 1
}
```

Response Example:
```JSON
{
  "project_info": {
    "id": 1,
    "user_id": "google-auth0-2903",
    "team_id": 1,
    "project_name": "Tremendous Task",
    "complete": false
  },
  "team_info": {
    "id": 1,
    "team_name": "Storm Taskers"
  },
  "user_info": [
    {
      "id": 1,
      "full_name": "Kevin Nguyen",
      "email": "kev_win@gmail.com",
      "user_availability": "true",
      "user_status": "Working"
    }
  ],
  "phase_info": [
    {
      "id": "1",
      "phase_name": "Phase 1",
      "phase_order": "1",
      "phase_color": "blue",
      "phase_status": "In progress"
    }
  ],
}
```

* #### `POST /api/projects/`
Create a project

Request Example:
```JSON
{
  "project_name": "Tiny Task",
  "auth_token": "google-auth0-2903",
  "team_id": 1
}
```

Response Example:
```JSON
{
  "project_info":{
    "id": 1,
    "user_id": "google-auth0-2903",
    "team_id": 1,
    "project_name": "Tremendous Task",
    "complete": "false"
  },
  "team_info": {
    "id": 1,
    "team_name": "Storm Taskers"
  },
  "user_info": [
    {
      "id": 1,
      "full_name": "Kevin Nguyen",
      "email": "kev_win@gmail.com",
      "user_availability": "true",
      "user_status": "Working"
    }
  ],
  "phase_info": [] 
}
```

* #### `PUT /api/projects/:project_id`
Update Project Info

Properties you can update:
  project_name,
  complete

Request Example:
```JSON
  {
    "projectId": 1,
    "projectChanges": {
      "project_name": "Tremendous Task"
    }
  }
```

Response Example:
```JSON
{
  "project_info": {
    "id": 1,
    "user_id": "google-auth0-2903",
    "team_id": 1,
    "project_name": "Tremendous Task",
    "complete": "false"
  },
  "team_info": {
    "id": "1",
    "team_name": "Storm Taskers"
  },
  "user_info": [
    {
      "id": 1,
      "full_name": "Kevin Nguyen",
      "email": "kev_win@gmail.com",
      "user_availability": "true",
      "user_status": "Working"
    }
  ],
  "phase_info": [
    {
      "id": "1",
      "phase_name": "Phase 1",
      "phase_order": "1",
      "phase_color": "blue",
      "phase_status": "In progress"
    }
  ]
}
```

* #### `DELETE /api/projects/:project_id`
Gets Project Info

Request Example:
```JSON
{
  "projectId": 1
}
```

Response Example:
e.g. `"Delete Successful"`

### Phases
* #### `POST /api/phases/:project_id`
Create a phase for a project

Request Example:
```JSON
{	
  "phase_name": "Setup Phase",
  "phase_order": 1,
  "phase_color": "blue",
  "phase_status": "In progress"
}
```

Response Example:
```JSON
{	
  "id": 1,
  "phase_name": "Setup Phase",
  "phase_order": 1,
  "phase_color": "blue",
  "phase_status": "In progress"
} 
```

* #### `PUT /api/phases/:phase_id`
Update a phase for a project

Request Example:
```JSON
{	
  "phase_name": "New Setup Phase Name",
  "phase_order": 1,
  "phase_color": "Green",
  "phase_status": "In progress"
}
```

Response Example:
```JSON
{	
  "id": 1,
  "phase_name": "New Setup Phase Name",
  "phase_order": 1,
  "phase_color": "Green",
  "phase_status": "In progress"
} 
```

* #### `DELETE /api/phases/:project_id/:phase_id`
Delete a phase for a project

Response Example:
e.g. `"Delete Successful"`


### Tasks
* #### `GET /api/tasks/:task_id`
Retrieve a task

Request Example:
```JSON
{	
  "task_name": "Take Medicine",
  "task_status": "Completed"
}
```

Response Example:
```JSON
{	
 "task_info": {
  "id": 1,
  "task_name": "Take Medicine",
  "task_status": "Completed"
 }, 
 "user_info": [
   {
      "id": 1, 
      "full_name": "Kevin Nguyen",
      "email": "kev_win@gmail.com",
      "user_availability": true,
      "user_status": "Working",
	    "user_color": "blue"
    }
  ] 
}
```

* #### `POST /api/tasks/:phase_id`
Create a task for a phase

Request Example:
```JSON	
{
  "task_name": "Take Medicine",
  "task_status": "Completed"
}
```

Response Example:
```JSON
{	
 "task_info": {
  "id": 1,
  "task_name": "Take Medicine",
  "task_status": "Completed"
 }, 
 "user_info": [] 
}
```

* #### `PUT /api/tasks/:task_id`
Update a task
note: user_id must default to an empty array

Request Example:
```JSON
{
  "task_name": "Take Medicine",
  "task_status": "Completed",
  "user_id": [
    {
      "id": 1
    }
  ]
}
```

Response Example:
```JSON
{	
 "task_info": {
  "id": 1,
  "task_name": "Take Medicine",
  "task_status": "Completed"
 }, 
 "user_info": [
  {
    "id": 1, 
    "full_name": "Kevin Nguyen",
    "email": "kev_win@gmail.com",
    "user_availability": true,
    "user_status": "Working",
    "user_color": "blue"
  }
 ] 
}
```

* #### `DELETE /api/tasks/:task_id`
Delete a task

Response Example:
e.g. `"Delete Successful"`

### Teams
* #### `GET /api/project/:team_id`
Retrieve a team
// router.get('/api/teams', handler.teams.retrieveTeams);
router.post('/teams', handler.teams.createNewTeams);
// router.put('/api/teams', handler.teams.updateTeams);
// router.delete('/api/teams', handler.teams.deleteTeams);


// router.get('/api/messages', handler.messages.retrieveMessages);
// router.post('/api/messages', handler.messages.createNewMessages);
// router.delete('/api/messages', handler.messages.deleteMessages);

// router.get('/api/announcements', handler.announcements.retrieveAnnouncements);
// router.post('/api/announcements', handler.announcements.createNewAnnouncements);
// router.put('/api/announcements', handler.announcements.updateAnnouncements);
// router.delete('/api/announcements', handler.announcements.deleteAnnouncements);

// router.get('/resources', handler.resources.retrieveResources);
// router.post('/resources', handler.resources.createNewResources);
// router.put('/resources', handler.resources.updateResources);
// router.delete('/resources', handler.resources.deleteResources);