import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

// Import ReactiveJS toPromise
import 'rxjs/add/operator/toPromise';

import { Team } from '../../teams/Team';
import { User } from '../../projects/project-details/project-user/User';


@Injectable()
export class TeamService {
  private headers = new Headers({'Content-type': 'application/JSON'});
  private baseUrl: string = 'http://localhost:8080';
  public userTeams: Team[] = [];


  // Current Team Information
  public currentTeam: Team = {id: 1, team_name: 'Tiny Task'}; // Mock
  public selectedTeamInfo: Team;
  public selectedTeamUserInfo: User[] = [];

  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

  setCurrentTeam(team: Team): void {
    this.currentTeam = team;
  }

  // Get Information
  getUserTeams(userId: number): void {
    this.http.get(`${this.baseUrl}/api/teams/users/${userId}`)
      .toPromise()
      .then((response) => {
        this.userTeams = response.json()
      })
      .catch(this.handleError);
  }

  getTeamInfo(teamId: number): void {
    this.http.get(`${this.baseUrl}/api/teams/${teamId}`)
      .toPromise()
      .then((response) => {
        this.selectedTeamInfo = response.json().team_info[0];
        this.selectedTeamUserInfo = response.json().user_info;
      })
      .catch(this.handleError);
  }

  // Post Information
  makeNewTeam(userId: number, teamName: string): void {
    this.http.post(
      `${this.baseUrl}/api/teams`,
      JSON.stringify({user_id: userId, team_name: teamName}),
      {headers: this.headers})
      .toPromise()
      .then((response) => {
        this.userTeams.push(response.json().team_info)
      })
      .catch(this.handleError);
  }

  // Delete Information
  deleteTeam(teamId: number): void {
    this.http.delete(
      `${this.baseUrl}/api/teams/${teamId}`,
      {headers: this.headers})
      .toPromise()
      .then((response) => {
        let indexTeamToDelete = this.userTeams.findIndex(team => team.id === teamId);
        this.userTeams.splice(indexTeamToDelete, 1);
      })
      .catch(this.handleError);
  }

  removeFromTeam(userId: number): void {
    let indexToDelete = this.selectedTeamUserInfo.findIndex((user) => user.id === userId);
    this.selectedTeamUserInfo.splice(indexToDelete, 1);
  }
}
