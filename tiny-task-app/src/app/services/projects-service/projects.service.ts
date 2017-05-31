import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Project } from '../../projects/Project';

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
    return this.http.get(`${this.baseUrl}/project/${projectId}`)
            .toPromise()
            .then((response) => {
              // this.projects.push(???)
              return response.json().data;
            })
            .catch(this.handleError);
  }

  getUserTasks(token: string): Promise<object> {
    return this.http.get(`${this.baseUrl}/tasks/${token}`)
            .toPromise()
            .then((response) => {
              return response.json().data as object;
            })
            .catch(this.handleError);
  }


  // Post Information
  createProject(projectName: string, teamId: number): Promise<Project> {
    return this.http.post(
             `${this.baseUrl}/project`,
             JSON.stringify({projectName: projectName, teamId: teamId}))
            .toPromise()
            .then( (response) => {
              // this.projects.push(???)
              return response.json().data;
            })
            .catch(this.handleError);
  }


}










