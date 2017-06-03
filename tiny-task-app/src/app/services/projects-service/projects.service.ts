import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { Project } from '../../projects/Project';
import { Phase } from '../../projects/project-details/phases/Phase';
import { Task } from '../../projects/project-details/phases/tasks/Task';
import { User } from '../../projects/project-details/project-user/User';


@Injectable()
export class ProjectsService {
  private headers = new Headers({'Content-type': 'application/JSON'});
  private baseUrl: string = 'http://localhost:4200';

  // MOCK DATA
  public usersOnProject: User[] = [
    {
      id: 1,
      full_name: 'Kevin',
      email: 'kev_lose@gmail.com',
      user_availability: 'Available',
      user_status: 'Not working hard',
      user_color: 'pink'
    },
    {
      id: 2,
      full_name: 'David',
      email: 'iLoveSL@gmail.com',
      user_availability: 'Available',
      user_status: 'Very Sick',
      user_color: 'red'
    }
  ]

  // // MOCK DATA
  public projects: Project[] = [
    {
      id: 1,
      user_id: 't1',
      team_id: 1,
      project_name: 'Tiny Task',
      complete: false
    },
    {
      id: 2,
      user_id: 't2',
      team_id: 2,
      project_name: 'Make Millions',
      complete: false
    },
    {
      id: 3,
      user_id: 't3',
      team_id: 3,
      project_name: 'NOTED',
      complete: true
    }
  ];
  // public projects: Project[];

  // MOCK DATA
  public phases: Phase[] = [
    {
      id: 1,
      project_id: 1,
      phase_name: 'First MVP',
      phase_color: 'green',
      phase_order: 1,
      phase_status: 'In progress'
    },
    {
      id: 2,
      project_id: 1,
      phase_name: 'Second MVP',
      phase_color: 'red',
      phase_order: 2,
      phase_status: 'Not Started'
    }
  ];

  public tasks: Task[] = [
    {
      id: 1,
      task_name: 'Start Project',
      phase_id: 1,
      task_status: 'Not Finished'
    },
    {
      id: 2,
      task_name: 'Finish Project',
      phase_id: 1,
      task_status: 'Not finished'
    },
    {
      id: 3,
      task_name: 'Get phases done',
      phase_id: 2,
      task_status: "Not finished"
    }
  ];

  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

  // Fetch Information
  getProject(projectId: number): void {
    this.http.get(`${this.baseUrl}/api/project/${projectId}`)
      .toPromise()
      .then((response) => {
        this.usersOnProject
        // this.projects.push(???)
      })
      .catch(this.handleError);
  }

  getPhases(projectId: number): void {
    // this.http.get(`${this.baseUrl}/api/phases/${projectId}`)
    //   .toPromise()
    //   .then((response) => {
    //     this.phases = response.json();
    //   })
    //   .catch(this.handleError);
  }

  getPhaseTasks(phaseId: number): Promise<Task[]> {
    return this.http.get(`${this.baseUrl}/api/tasks/phase/${phaseId}`)
            .toPromise()
            .then((response) => {
              return response.json();
            })
            .catch(this.handleError);
  }

  getUserTasks(token: string): Promise<Task[]> {
    return this.http.get(`${this.baseUrl}/api/tasks/user/${token}`)
            .toPromise()
            .then((response) => {
              return response.json();
            })
            .catch(this.handleError);
  }

  // Post Information

  // MOCK DATA
  // public testProject: Project = {
  //                                 id: 4,
  //                                 user_id: 't4',
  //                                 team_id: 1,
  //                                 project_name: 'New Project',
  //                                 complete: false
  //                               }

  createProject(teamId: number, userId: string): void {
    // this.projects.push(this.testProject);
    this.http.post(
      `${this.baseUrl}/api/project`,
      JSON.stringify({user_id: userId, team_id: teamId}))
      .toPromise()
      .then( (response) => {
        this.projects.push(response.json());
      })
      .catch(this.handleError);
  }

  // MOCK DATA
  public testPhase: Phase = {
                              id: 3,
                              project_id: 1,
                              phase_name: 'New Phase',
                              phase_color: 'green',
                              phase_order: 1,
                              phase_status: 'In progress'
                            };

  createPhase(projectId: number): void {
    this.phases.push(this.testPhase);
    // this.http.post(
    //   `${this.baseUrl}/api/project/${projectId}`,
    //   JSON.stringify({projectId: projectId, phaseName: "Phase"}))
    //   .toPromise()
    //   .then( (response) => {
    //     this.phases.push(response.json());
    //   })
    //   .catch(this.handleError);
  }

  createTask(phaseId: number): Promise<Task> {
    return this.http.post(
            `${this.baseUrl}/api/tasks/${phaseId}`,
            JSON.stringify({phaseId: phaseId, taskName: 'New Task'}))
            .toPromise()
            .then( (response) => {
              return response.json();
            })
            .catch(this.handleError);
  }

  // Edit Information
  editProjectName(projectId: number, projectName: string): void {
    // this.http.put(
    //   `${this.baseUrl}/api/project/${projectId}`,
    //   JSON.stringify({projectId: projectId, projectName: projectName}))
    //   .toPromise()
    //   .then( (response) => {
    //     this.projects.find(project => project.id === projectId).project_name = projectName;
    //   })
    //   .catch(this.handleError);
  }

  editPhaseName(phaseId: number, phaseName: string): void {
    // this.http.put(
    //   `${this.baseUrl}/api/phases/${phaseId}`,
    //   JSON.stringify({phase_name: projectName}))
    //   .toPromise()
    //   .then( (response) => {
    //     this.phases.find(phase => phase.id === phaseId).phase_name = phaseName;
    //   })
    //   .catch(this.handleError);
  }

  editTaskName(taskId: number, taskName: string): Promise<Task> {
    return this.http.put(
            `${this.baseUrl}/api/tasks/${taskId}`,
            JSON.stringify({taskId: taskId, taskName: taskName}))
            .toPromise()
            .then(response => {
              return response.json();
            })
            .catch(this.handleError);
  }

  // MOCK DATA
  public testUser: User = {
                            id: 3,
                            full_name: 'Brian',
                            email: 'king@gmail.com',
                            user_availability: 'Available',
                            user_status: 'Working too hard',
                            user_color: 'Green'
                          }

  addUserToProject(projectId: number, userId: string): void {
    this.usersOnProject.push(this.testUser);
    // this.http.post(
    //   `${this.baseUrl}/api/projects/${projectId}/users`,
    //   JSON.stringify({projectId: projectId, userId: userId}))
    //   .toPromise()
    //   .then( (response) => {
    //     this.usersOnProject.push(response.json());
    //   })
    //   .catch(this.handleError);
  }

  // Delete Information
  deleteProject(projectId: number): void {
    this.http.delete(`${this.baseUrl}/api/project/${projectId}`)
      .toPromise()
      .then( (response) => {
        this.projects.splice(this.projects.findIndex(project => project.id === projectId, 1));
      })
      .catch(this.handleError);
  }

  deletePhase(phaseId: number): void {
    this.http.delete(`${this.baseUrl}/api/phase/${phaseId}`)
      .toPromise()
      .then( (response) => {
        this.phases.splice(this.phases.findIndex(phase => phase.id === phaseId, 1));
      })
      .catch(this.handleError);
  }

  deleteTask(taskId: number): void {
    this.http.delete(`${this.baseUrl}/api/tasks/${taskId}`);
  }
}