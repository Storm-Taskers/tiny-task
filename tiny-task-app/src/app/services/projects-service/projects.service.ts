import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProjectsService {
  private headers = new Headers({'Content-type': 'application/JSON'});
  private baseUrl: string = 'http://localhost:4200';

  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

  getProjectPhases(projectId: number): Promise<object> {
    return this.http.get(`${this.baseUrl}/project/${projectId}`)
            .toPromise()
            .then(response => response.json().data as object)
            .catch(this.handleError);
  }

  getUserTasks(token: string): Promise<object> {
    return this.http.get(`${this.baseUrl}/tasks/${token}`)
            .toPromise()
            .then(response => response.json().data as object)
            .catch(this.handleError);
  }
}
