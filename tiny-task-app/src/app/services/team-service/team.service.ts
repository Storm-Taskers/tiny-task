import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Team } from '../../teams/Team';

@Injectable()
export class TeamService {
  private headers = new Headers({'Content-type': 'application/JSON'});
  private baseUrl: string = 'http://localhost:4200';

  public currentTeam: Team;

  constructor(private http: Http) { }

  setCurrentTeam(team: Team): void {
    this.currentTeam = team;
  }


}
