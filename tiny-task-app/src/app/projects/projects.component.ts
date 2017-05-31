import { Component, OnInit, Input } from '@angular/core';

import { ProjectsService } from '../services/projects-service/projects.service';
import { UserService } from '../services/user-service/user.service';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {
  projects: Array<any>;

  constructor(
    private projectsService: ProjectsService,
    private userService: UserService
  ) { }

  ngOnInit() {
    console.log('Project Ids:', this.userService.projectIds)
    // this.userService.projectIds.forEach((projectId) => {
    //   this.projectsService.getProject(projectId)
    //     .then((project) => {
    //       this.projects.push(project);
    //     });
    // });
  }

}
