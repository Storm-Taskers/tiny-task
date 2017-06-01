import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { ProjectsService } from '../../services/projects-service/projects.service';
import { UserService } from '../../services/user-service/user.service';
import { NavService } from '../../services/nav-service/nav.service';
import { TeamService } from '../../services/team-service/team.service';

import { Phase } from './phases/Phase';
import { User } from './project-user/User';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})

export class ProjectDetailsComponent implements OnInit {
  currentProjectId: number;
  projectPhases: Phase[];
  projectUsers: User[];

  constructor(
    private projectsService: ProjectsService,
    private userService: UserService,
    private navService: NavService,
    private teamService: TeamService,
    private route: ActivatedRoute,
    private location: Location
   ) { }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    // Render Navigation Bar
    this.navService.changeToDetailsPage();

    // Get Current Project Id
    this.route.params.subscribe(params => this.currentProjectId = +params['id']);

    // Get Project Phases
    this.route.params
      .switchMap((params: Params) => this.projectsService.getPhases(+params['id']))
      .subscribe(phases => this.projectPhases = phases);

    // Get Users on Project
    this.route.params
      .switchMap((params: Params) => this.userService.getUsersOnProject(+params['id']))
      .subscribe(users => this.projectUsers = users);

  }

  addNewProjectUser(): void {
    this.userService.addUserToProject(this.currentProjectId, '3') // Mock User ID
      .then(user => this.projectUsers.push(user));
  }

  addNewPhase(): void {
    this.projectsService.createPhase(this.currentProjectId)
      .then(phase => this.projectPhases.push(phase));
  }


}
