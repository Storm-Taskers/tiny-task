import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Project } from '../../projects/Project';
import { Phase } from '../../projects/project-details/phases/Phase';
import { Task } from '../../projects/project-details/phases/tasks/Task';

@Injectable()
export class ProjectsService {
  private headers = new Headers({'Content-type': 'application/JSON'});
  private baseUrl: string = 'http://localhost:4200';

  // MOCK DATA
  public projects: Project[] = [
    {
      id: 1,
      user_id: 't1',
      team_id: 1,
      project_name: 'Project 1',
      complete: false
    },
    {
      id: 2,
      user_id: 't2',
      team_id: 2,
      project_name: 'Project 2',
      complete: false
    },
    {
      id: 3,
      user_id: 't3',
      team_id: 3,
      project_name: 'Project 3',
      complete: true
    }
  ];

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

  public test: Phase[] = [
  ];

  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

  // Fetch Information
  getProject(projectId: number): Promise<Project> {
    return this.http.get(`${this.baseUrl}/api/project/${projectId}`)
            .toPromise()
            .then((response) => {
              // this.projects.push(???)
              return response.json();
            })
            .catch(this.handleError);
  }

  // MOCK DATA
  getThePhases(): Promise<Phase[]> {
    return Promise.resolve(this.phases)
  }

  getPhases(projectId: number): Promise<Phase[]> {
    return this.getThePhases()
            .then((phases) => {
              return phases;
            });
    // this.http.get(`${this.baseUrl}/api/phases/${projectId}`)
    //         .toPromise()
    //         .then((response) => {
    //           return response.json();
    //         })
    //         .catch(this.handleError);
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
  createProject(teamId: number, userId: string): Promise<Project> {
    return this.http.post(
            `${this.baseUrl}/api/project`,
            JSON.stringify({user_id: userId, team_id: teamId}))
            .toPromise()
            .then( (response) => {
              // this.projects.push(???)
              return response.json();
            })
            .catch(this.handleError);
  }

  createPhase(projectId: number): Promise<Phase> {
    return this.http.post(
            `${this.baseUrl}/api/project/${projectId}`,
            JSON.stringify({projectId: projectId, phaseName: "Phase"}))
            .toPromise()
            .then( (response) => {
              return response.json();
            })
            .catch(this.handleError);
  }

  createTask(phaseId: number, taskName: string): Promise<Task> {
    return this.http.post(
            `${this.baseUrl}/api/tasks/${phaseId}`,
            JSON.stringify({phaseId: phaseId, taskName: taskName}))
            .toPromise()
            .then( (response) => {
              return response.json();
            })
            .catch(this.handleError);
  }


  // Edit Information
  editProjectName(projectId: number, projectName: string): Promise<string> {
    return this.http.put(
            `${this.baseUrl}/api/project/${projectId}`,
            JSON.stringify({projectId: projectId, projectName: projectName}))
            .toPromise()
            .then( (response) => {
              this.projects.find(project => project.id === projectId).project_name = projectName;
              return response.json();
            })
            .catch(this.handleError);
  }

}