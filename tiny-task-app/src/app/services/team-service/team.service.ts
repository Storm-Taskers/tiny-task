import { Injectable } from '@angular/core';

import { Team } from '../../teams/Team';

@Injectable()
export class TeamService {
  public currentTeam: Team;

  constructor() { }

  setCurrentTeam(team: Team): void {
    this.currentTeam = team;
  }

}
