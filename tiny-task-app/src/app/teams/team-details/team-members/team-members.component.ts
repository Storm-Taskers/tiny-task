import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { ProjectsService } from '../../../services/projects-service/projects.service';
import { TeamService } from '../../../services/team-service/team.service';

import { User } from '../../../projects/project-details/project-user/User';

@Component({
  selector: 'team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.css']
})

export class TeamMembersComponent implements OnInit {
  public selectedUserId: number;
  public selectedUserInfo: User;

  constructor(
    private projectsService: ProjectsService,
    private teamService: TeamService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    // Get Current User Id and Information
    this.route.params.subscribe(params => {
      this.selectedUserId = +params['id'];
      this.selectedUserInfo = this.projectsService.usersOnProject.find((user) => user.id === this.selectedUserId);
    });
  }
}