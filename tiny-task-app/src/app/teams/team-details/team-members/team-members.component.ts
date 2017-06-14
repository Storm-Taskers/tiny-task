import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import { ProjectsService } from '../../../services/projects-service/projects.service';
import { TeamService } from '../../../services/team-service/team.service';

import { User } from '../../../projects/project-details/project-user/User';
import { Task } from '../../../projects/project-details/phases/tasks/Task';

@Component({
  selector: 'team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.css']
})

export class TeamMembersComponent implements OnInit {
  private selectedUserId: number;
  private selectedUserInfo: User;
  private userTasks: Task[] = [];
  private loadNoUser: boolean;

  constructor(
    private projectsService: ProjectsService,
    private teamService: TeamService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    // Get Current User Id and Information
    this.route.params.subscribe(params => {
      if ( typeof params['teamUserId'] !== 'undefined' ) {
        this.projectsService.getUserProjectsAndTasks(+params['id'], +params['teamUserId']).then(projectsAndTasks => {
          console.log(projectsAndTasks);
        });
      } else {
        this.selectedUserId = +params['id'];
        if ( typeof this.projectsService.usersOnProject !== 'undefined' ) {
          this.selectedUserInfo = this.projectsService.usersOnProject.find((user) => user.id === this.selectedUserId);
        // Render User's tasks
          this.projectsService.getUserTasks(this.selectedUserId, this.projectsService.currentProject.id).then((tasks) => {
            this.userTasks = tasks;
          })
        } else {
          this.router.navigate(['/projects']);
        }
      }
    });
  }
}