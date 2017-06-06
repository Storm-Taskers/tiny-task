import { Component, OnInit } from '@angular/core';

import { TeamService } from '../services/team-service/team.service';
import { UserService } from '../services/user-service/user.service';

import { Team } from './Team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})

export class TeamsComponent implements OnInit {

  constructor(
    private teamService: TeamService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.teamService.getUserTeams(this.userService.userId);
  }

  addNewTeam(teamName: string): void {
    this.teamService.makeNewTeam(this.userService.userId, teamName);
  }

  deleteTeam(teamId: number): void {
    this.teamService.deleteTeam(teamId);
  }
}
