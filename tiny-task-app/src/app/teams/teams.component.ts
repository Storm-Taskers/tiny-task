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
  public nameField: string;

  constructor(
    private teamService: TeamService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.teamService.getUserTeams(this.userService.userId);
  }

  addNewTeam(teamName: string): void {
    if (teamName !== '' && typeof teamName !== 'undefined') {
      this.teamService.makeNewTeam(this.userService.userId, teamName);
      this.nameField = '';
    }
  }

  deleteTeam(teamId: number, teamName: string): void {
    if (confirm(`Are you sure you want to delete "${teamName}"?`)) {
      this.teamService.deleteTeam(teamId);
    }
  }
}
