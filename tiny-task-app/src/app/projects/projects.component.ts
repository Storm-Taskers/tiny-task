import { Component, OnInit, Input } from '@angular/core';

import { ProjectsService } from '../services/projects-service/projects.service';
import { UserService } from '../services/user-service/user.service';
import { TeamService } from '../services/team-service/team.service';
import { NavService } from '../services/nav-service/nav.service';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {

  constructor(
    private projectsService: ProjectsService,
    private userService: UserService,
    private teamService: TeamService,
    private navService: NavService
  ) { }

  ngOnInit() {
    // Render Navigation Bar
    this.navService.changeToProjectsPage();

    // this.userService.projectIds.forEach((projectId) => {
    //   this.projectsService.getProject(projectId)
    //     .then((project) => {
    //       this.projects.push(project);
    //     });
    // });
  }

  showDetails(): void {
    this.navService.changeToDetailsPage();
  }

  addNewProject(): void {
    let teamId: number = this.userService.currentTeam.id;
    let userId: string = this.userService.userId;
    this.projectsService.createProject(teamId, userId)
      .then();
  }

  editProjectName(projectId: number, newName: string): void {
    this.projectsService.editProjectName(projectId, newName)
      .then();
  }
}
