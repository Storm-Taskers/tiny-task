import { Component, OnInit } from '@angular/core';

import { TeamService } from '../services/team-service/team.service';
import { UserService } from '../services/user-service/user.service';
import { NavService } from '../services/nav-service/nav.service';
import { ProjectsService } from '../services/projects-service/projects.service';

import { Team } from './Team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})

export class TeamsComponent implements OnInit {
  public nameField: string;

  constructor(
    public teamService: TeamService,
    public userService: UserService,
    public navService: NavService,
    public projectsService: ProjectsService
  ) { }

  ngOnInit() {
    this.userService.userUpdate.subscribe( (userData) => {
      // Team Rendering
      this.teamService.getUserTeams(userData.user_profile.id);
    });

    if ( this.teamService.userTeams.length === 0 ) {
      this.teamService.getUserTeams(this.userService.userId);
    }
  }

  addNewTeam(teamName: string): void {
    if (teamName !== '' && typeof teamName !== 'undefined') {
      this.teamService.makeNewTeam(this.userService.userId, teamName);
      this.nameField = '';
    }
  }

  deleteTeam(teamId: number, teamName: string): void {
    if (confirm(`Are you sure you want to delete "${teamName}"?`)) {
      this.teamService.deleteTeam(teamId).then(() => {
        this.navService.lastVisitedProject = 'all';
        this.projectsService.getProjectIds(this.userService.userId);
      });
    }
  }
}
