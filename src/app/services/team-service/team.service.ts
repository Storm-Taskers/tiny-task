import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// Import Observable Operators
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Team } from '../../teams/Team';
import { User } from '../../projects/project-details/project-user/User';
import { environment } from '../../../environments/environment';

@Injectable()
export class TeamService {
  private headers = new Headers({'Content-type': 'application/JSON'});
  private baseUrl: string = environment.serverUrl;
  public userTeams: Team[] = [];

  // Current Team Information
  public currentTeam: number; // Mock
  public selectedTeamInfo: Team;
  public selectedTeamUserInfo: User[] = [];

  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

  // Get Information
  getUserTeams(userId: number): void {
    this.http.get(`${this.baseUrl}/api/teams/users/${userId}`)
      .toPromise()
      .then((response) => {
        this.userTeams = response.json();
        this.currentTeam = this.userTeams.find(team => team.solo_team == true).id;
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

  findAllUsers(user: string): Observable<User[]> {
    return this.http.get(
            `${this.baseUrl}/api/users/search/${user}`)
            .map(response => response.json() as User[]);
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

  // Edit Information
  addTeamMember(teamId: number, userId: number): void {
    this.http.put(
      `${this.baseUrl}/api/teams/${teamId}`,
      JSON.stringify({user_id: userId, remove: false}),
      {headers: this.headers})
      .toPromise()
      .then((response) => {
        this.selectedTeamUserInfo = response.json().user_info;
      })
      .catch(this.handleError);
  }

  // Delete Information
  deleteTeam(teamId: number): Promise<any> {
    return this.http.delete(
            `${this.baseUrl}/api/teams/${teamId}`,
            {headers: this.headers})
            .toPromise()
            .then((response) => {
              let indexTeamToDelete = this.userTeams.findIndex(team => team.id === teamId);
              this.userTeams.splice(indexTeamToDelete, 1);
            })
            .catch(this.handleError);
  }

  removeFromTeam(teamId: number, userId: number): void {
    this.http.put(
      `${this.baseUrl}/api/teams/${teamId}`,
      JSON.stringify({user_id: userId, remove: true}),
      {headers: this.headers})
      .toPromise()
      .then((response) => {
        let indexMemberToDelete = this.selectedTeamUserInfo.findIndex(member => member.id === userId);
        this.selectedTeamUserInfo.splice(indexMemberToDelete, 1);
      })
      .catch(this.handleError);
  }
}