# tiny-task

## Team

  - __Product Owner__: [Kevin Nguyen]()
  - __Scrum Master__: [Brian Leung]()
  - __Development Team Members__: [Beth Stevic](), [David Hsiao]()

## Table of Contents
1. [API Routes](#routes)
    1. [Users](#users)
    1. [Teams](#teams)
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
      "id": 1,
      "full_name": "Kevin Nguyen",
      "email": "kev_win@gmail.com",
      "user_availability": "true",
      "user_status": "Working",
      "user_color": null
    },
    "project_ids": [1, 2, 3, 4]
  }
  ```


  * #### `POST /api/users`
  Create a user

  Request Example:
  ```JSON
  {
    "user_id": "1",
    "full_name": "Kevin Nguyen",
    "email": "kevin@tinytask.com",
    "user_status": "slacking off",
    "user_availability: false
  }
  ```

  Response Example:
  ```JSON
  {
     "User Added"
  }
  ```

  * #### `PUT /api/users`
  Updates a user

  Request Example:
  ```JSON
  {
    "user_id": "1",
    "full_name": "Kevin Nguyen"
  }
  ```

  Response Example:
  {
    "id": 4,
    "full_name": "Test User",
    "email": "test@testing.com",
    "user_status": "Working hard",
    "user_availability": "true",
    "user_color": "green",
  }
  ```

  * #### `DELETE /api/users`
  Delete a User

  Request Example:
  ```JSON
  {
    "user_id": "1",
  }
  ```

  Response Example:
    "Deleted User"

### Teams
  * #### `GET /api/teams/:team_id`

  Request Example:

  ```JSON
    {
    "project_id": 1,
    "user_id": "user_id of creating user"
    }
  ```

  Response Example:
  ```JSON
    {
    team_info {
      “id”: 3,
      “team_name”: “something”,
      }
      project_info {
        “id”: 1,
        “project_name”: “Tiny Task”,
        “complete”: false
        “user_id”: “Kevin”,
        "team_id”: 1
      }
        User_info: [
        {user1 profile info},
        {user2 profile info}
      ]
    }
  ```
  * #### `POST /api/teams`

  Request Example:

  ```JSON
    {
    "user_id": "4",
    "team_name": "Storm Taskers" <= Team Name May Be Null
    }
  ```

  Response Example:
  ```JSON
    {
      "team_info": {
        "id": 6,
        "team_name": "Test2",
        "updatedAt": "2017-06-04T20:23:07.000Z",
        "createdAt": "2017-06-04T20:23:07.000Z"
      },
      "user_info": {
        "id": 8,
        "team_id": 6,
        "user_id": "4",
        "updatedAt": "2017-06-04T20:23:07.000Z",
        "createdAt": "2017-06-04T20:23:07.000Z"
      }
    }
  ```
  * #### `PUT/api/teams/:team_id`
  **Add or remove a team user
  Request Example:

  ```JSON
    {
    "user_id": "user_id of user to be added",
    "remove": false <= if you want to remove a user, send true
    }
  ```
  Response Example:
  
  ```JSON
    {
    "team_info": {
      “id”: 3,
      “team_name”: “something”
      },
    "user_info": {
      {user_profile},
      {user_profile}
      }
    }
  ```

  * #### `DELETE /api/teams/:team_id`
  Remove a team
    nothing needs to be sent or recieved

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
      "phase_order": "1, 2, 3",
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
    "user_id": "1",
    "team_id": 1,
  }
  ```

  Response Example:
  ```JSON
  {
    "project_info":{
      "id": 1,
      "user_id": "1",
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
      "user_id": "1",
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
  Delete Project Info

  Response Example:
  e.g. `"Delete Successful"`

### Phases
  * #### `POST /api/phases/:project_id`
  Create a phase for a project

  Request Example:
  ```JSON
  {
    "phase_name": "Setup Phase",
    "phase_color": "blue",
    "phase_status": "In progress",
    "user_id": "2",
    "team_id": "1"
  }
  ```

  Response Example:
  ```JSON
  {
    "id": 1,
    "project_id": "1",
    "phase_name": "Setup Phase",
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
    "task_status": "Completed",
    "task_color": "green"
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
    "taskChanges": {
      "task_name": "Get stuff done",
      "complete": false,
      "task_weight": 1,
      "task_color": "red",
      "phase_id": 1,
      "stage": "in progress"
    }
  }
  ```



  Response Example:
  ```JSON
  {
   "task_info": {
    "id": 1,
    "task_name": "Take Medicine",
    "complete": false
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