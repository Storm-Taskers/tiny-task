import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { ProjectsService } from '../../services/projects-service/projects.service';
import { UserService } from '../../services/user-service/user.service';

import { Phase } from './phases/Phase';
import { User } from './project-user/User';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})

export class ProjectDetailsComponent implements OnInit {
  projectPhases: Phase[];
  projectUsers: User[];

  constructor(
    private projectsService: ProjectsService,
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
   ) { }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    // Get Project Phases
    this.route.params
      .switchMap((params: Params) => this.projectsService.getPhases(+params['id']))
      .subscribe(phases => this.projectPhases = phases);

    // Get Users on Project
    this.route.params
      .switchMap((params: Params) => this.userService.getUsersOnProject(+params['id']))
      .subscribe(users => this.projectUsers = users);
  }
}
