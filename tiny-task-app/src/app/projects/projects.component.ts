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

    this.projectsService.projects = [];

    setTimeout(() => {
      this.projectsService.projectIds.forEach((projectId) => {
        this.projectsService.getProject(projectId);
      });
    }, 1000);
  }

  showDetails(): void {
    this.navService.changeToDetailsPage();
  }

  addNewProject(): void {
    let teamId: number = this.userService.currentTeam.id;
    let userId: string = this.userService.userId;
    
    this.projectsService.createProject(teamId, userId);
  }

  deleteProject(projectId: number): void {
    if (confirm('Are you sure you want to delete this?')) {
      this.projectsService.deleteProject(projectId);
    }
  }

  editProjectName(projectId: number, newName: string): void {
    this.projectsService.editProjectName(projectId, newName);
  }
}
