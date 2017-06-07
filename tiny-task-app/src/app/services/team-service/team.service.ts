import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

// Import ReactiveJS toPromise
import 'rxjs/add/operator/toPromise';

import { Team } from '../../teams/Team';


@Injectable()
export class TeamService {
  private headers = new Headers({'Content-type': 'application/JSON'});
  private baseUrl: string = 'http://localhost:8080';
  public userTeams: Team[] = [];


  // Current Team Information
  public currentTeam: Team = {id: 1, teamName: 'Tiny Task'}; // Mock
  public selectedTeamInfo: any;

  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

  setCurrentTeam(team: Team): void {
    this.currentTeam = team;
  }

  // Get Information
  getUserTeams(userId: string): void {
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
        this.selectedTeamInfo = response.json();
      })
      .catch(this.handleError);
  }

  // Post Information
  makeNewTeam(userId: string, teamName: string): void {
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

}
