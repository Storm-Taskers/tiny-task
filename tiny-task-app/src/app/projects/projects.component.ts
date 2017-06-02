import { Component, OnInit, Input } from '@angular/core';

import { ProjectsService } from '../services/projects-service/projects.service';
import { UserService } from '../services/user-service/user.service';
import { NavService } from '../services/nav-service/nav.service';

import { Project } from './Project';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {
  projects: Project[];
  currentProject: Project;
  editableText: string = 'myText';
  
  constructor(
    private projectsService: ProjectsService,
    private userService: UserService,
    private navService: NavService
  ) { }

  ngOnInit() {
    // Render Navigation Bar
    this.projects = this.projectsService.projects;

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
      .then(project => this.projects.push(project));
  }

  saveEditable(projectId: number, value: string): void {
    //call to http service
    console.log('http.service: ', projectId, value);
  }
}
