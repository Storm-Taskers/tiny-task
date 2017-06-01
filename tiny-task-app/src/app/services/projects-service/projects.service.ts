import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Project } from '../../projects/Project';
import { Phase } from '../../projects/project-details/phases/Phase';
import { Task } from '../../projects/project-details/Task';

@Injectable()
export class ProjectsService {
  private headers = new Headers({'Content-type': 'application/JSON'});
  private baseUrl: string = 'http://localhost:4200';
  public projects: Project[];

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

  getUserTasks(token: string): Promise<object> {
    return this.http.get(`${this.baseUrl}/api/tasks/${token}`)
            .toPromise()
            .then((response) => {
              return response.json() as object;
            })
            .catch(this.handleError);
  }


  // Post Information
  createProject(projectName: string, teamId: number): Promise<Project> {
    return this.http.post(
            `${this.baseUrl}/api/project`,
            JSON.stringify({projectName: projectName, teamId: teamId}))
            .toPromise()
            .then( (response) => {
              // this.projects.push(???)
              return response.json();
            })
            .catch(this.handleError);
  }

  createPhase(projectId: number, phaseName: string): Promise<Phase> {
    return this.http.post(
            `${this.baseUrl}/api/project/${projectId}`,
            JSON.stringify({projectId: projectId, phaseName: phaseName}))
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

}