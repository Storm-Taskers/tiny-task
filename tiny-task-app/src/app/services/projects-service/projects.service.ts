import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

// Import ReactiveJS toPromise
import 'rxjs/add/operator/toPromise';

import { Project } from '../../projects/Project';
import { Phase } from '../../projects/project-details/phases/Phase';
import { Task } from '../../projects/project-details/phases/tasks/Task';
import { User } from '../../projects/project-details/project-user/User';


@Injectable()
export class ProjectsService {
  private headers = new Headers({'Content-type': 'application/JSON'});
  private baseUrl: string = 'http://localhost:8080';

  public projectIds: number[] = [];

  public projects: Project[] = [];
  public currentProject: Project;
  public phases: Phase[] = [];
  public usersOnProject: User[];
  public tasks: Task[];


  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

  // Fetch Information
  getProject(projectId: number): void {
    this.http.get(`${this.baseUrl}/api/projects/${projectId}`)
      .toPromise()
      .then((response) => {
        this.usersOnProject = response.json().user_info;
        this.phases = response.json().phase_info;
        this.projects.push(response.json().project_info);
        this.currentProject = response.json().project_info;
      })
      .catch(this.handleError);
  }

  // getPhases(projectId: number): void {
  //   this.http.get(`${this.baseUrl}/api/phases/${projectId}`)
  //     .toPromise()
  //     .then((response) => {
  //       console.log(response.json());
  //       this.phases = response.json();
  //     })
  //     .catch(this.handleError);
  // }

  // getPhaseTasks(phaseId: number): Promise<Task[]> {
  //   return this.http.get(`${this.baseUrl}/api/tasks/phase/${phaseId}`)
  //           .toPromise()
  //           .then((response) => {
  //             return response.json();
  //           })
  //           .catch(this.handleError);
  // }

  getTasks(phaseId: number): Promise<Task[]> {
    return this.http.get(`${this.baseUrl}/api/tasks/${phaseId}`)
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
  createProject(teamId: number, userId: string): void {
    this.http.post(
      `${this.baseUrl}/api/projects`,
      JSON.stringify({project_name: 'New Project', user_id: userId, team_id: teamId}),
      {headers: this.headers})
      .toPromise()
      .then( (response) => {
        this.projects.push(response.json().project_info);
        this.projectIds.push(response.json().project_info.id);
      })
      .catch(this.handleError);
  }

  createPhase(projectId: number): void {
    this.http.post(
      `${this.baseUrl}/api/phases/${projectId}`,
      JSON.stringify({phase_name: "New Phase"}),
      {headers: this.headers})
      .toPromise()
      .then( (response) => {
        this.phases.push(response.json());
      })
      .catch(this.handleError);
  }

  createTask(phaseId: number): Promise<Task> {
    return this.http.post(
            `${this.baseUrl}/api/tasks/${phaseId}`,
            JSON.stringify({task_name: 'New Task'}),
            {headers: this.headers})
            .toPromise()
            .then( (response) => {
              console.log(response);
              return response.json();
            })
            .catch(this.handleError);
  }

  // Edit Information
  editProjectName(projectId: number, projectName: string): void {
    this.http.put(
      `${this.baseUrl}/api/projects/${projectId}`,
      JSON.stringify({projectId: projectId, projectChanges: {project_name: projectName}}),
      {headers: this.headers})
      .toPromise()
      .then( (response) => {
        this.projects.find(project => project.id === projectId).project_name = projectName;
      })
      .catch(this.handleError);
  }

  editPhaseName(phaseId: number, phaseName: string): void {
    this.http.put(
      `${this.baseUrl}/api/phases/${phaseId}`,
      JSON.stringify({phase_name: phaseName}),
      {headers: this.headers})
      .toPromise()
      .then( (response) => {
        this.phases.find(phase => phase.id === phaseId).phase_name = phaseName;
      })
      .catch(this.handleError);
  }

  editTaskName(taskId: number, taskName: string): Promise<Task> {
    return this.http.put(
            `${this.baseUrl}/api/tasks/${taskId}`,
            JSON.stringify({taskChanges: {
                task_name: taskName
              }
            }),
            {headers: this.headers})
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

  // Delete Information
  deleteProject(projectId: number): void {
    this.http.delete(`${this.baseUrl}/api/projects/${projectId}`)
      .toPromise()
      .then( (response) => {
        let projectToRemove = this.projects.findIndex(project => project.id === projectId);
        this.projects.splice(projectToRemove, 1);
      })
      .catch(this.handleError);
  }

  deletePhase(phaseId: number): void {
    this.http.delete(`${this.baseUrl}/api/phases/${phaseId}`)
      .toPromise()
      .then( (response) => {
        let phaseToRemove = this.phases.findIndex(phase => phase.id === phaseId);
        this.phases.splice(phaseToRemove, 1);
      })
      .catch(this.handleError);
  }

  deleteTask(taskId: number): void {
    this.http.delete(`${this.baseUrl}/api/tasks/${taskId}`)
      .toPromise()
      .then( (response) => {
      })
      .catch(this.handleError);;
  }
}