import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import { ProjectsService } from '../../../services/projects-service/projects.service';
import { TeamService } from '../../../services/team-service/team.service';
import { UserService } from '../../../services/user-service/user.service';
import { NavService } from '../../../services/nav-service/nav.service';

import { User } from '../../../projects/project-details/project-user/User';
import { Task } from '../../../projects/project-details/phases/tasks/Task';

@Component({
  selector: 'team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.css']
})

export class TeamMembersComponent implements OnInit {
  public selectedUserId: number;
  public selectedUserInfo: User;
  public userTasks: Task[] = [];
  public loadAllProjects: boolean;
  public projectsAndTasks: any;

  constructor(
    public projectsService: ProjectsService,
    public teamService: TeamService,
    public userService: UserService,
    public navService: NavService,
    public route: ActivatedRoute,
    public router: Router,
    public location: Location
  ) { }

  ngOnInit() {
    // Get Current User Id and Information
    this.route.params.subscribe(params => {
      if ( typeof params['teamUserId'] !== 'undefined' && typeof this.userService.userProfile !== 'undefined' ) {
        this.selectedUserId = +params['teamUserId'];
        this.userService.getUserProfile(this.selectedUserId)
          .then(userProfile => this.selectedUserInfo = userProfile);
        this.loadAllProjects = true;
        this.projectsService.getUserProjectsAndTasks(this.selectedUserId, +params['id']).then(projectsAndTasks => {
          this.projectsAndTasks = projectsAndTasks;
        });
      } else if ( typeof this.projectsService.usersOnProject !== 'undefined' ) {
          this.selectedUserId = +params['id'];
          this.loadAllProjects = false;
          this.selectedUserInfo = this.projectsService.usersOnProject.find((user) => user.id === this.selectedUserId);
          // Render User's tasks
          this.projectsService.getUserTasks(this.selectedUserId, this.projectsService.currentProject.id).then((tasks) => {
            this.userTasks = tasks;
          })
      } else {
        this.router.navigate(['/projects']);
      }
    });
  }
  returnToProject() {
    this.location.back();
  }
}
