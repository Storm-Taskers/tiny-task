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

  constructor(
    private projectsService: ProjectsService,
    private userService: UserService,
    private navService: NavService
  ) { }

  ngOnInit() {
    this.projects = this.projectsService.projects;
    console.log(this.projects);
    // this.userService.projectIds.forEach((projectId) => {
    //   this.projectsService.getProject(projectId)
    //     .then((project) => {
    //       this.projects.push(project);
    //     });
    // });
  }
}
