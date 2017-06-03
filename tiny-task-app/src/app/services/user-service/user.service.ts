import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Team } from '../../teams/Team';
import { User } from '../../projects/project-details/project-user/User';

// Import ReactiveJS Observables
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  private headers = new Headers({'Content-Type': 'application/JSON'});
  private baseUrl: string = 'http://localhost:8080';

  public userId: string = 'test';
  public userProfile: User;
  public projectIds: number[];
  public teams: Team[];
  public currentTeam: Team = {id: 1, teamName: 'Tiny Task'}; // MOCK DATA

  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

  getUserInfo(token: string): void {
    this.http.get(`${this.baseUrl}/api/users/${token}`)
      .toPromise()
      .then( (response) => {
        this.userProfile = response.json();
        this.projectIds = response.json().project_id;
        this.userProfile = response.json().user_profile;
      })
      .catch(this.handleError);
  }
}
