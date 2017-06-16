import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { ProjectsService } from '../../services/projects-service/projects.service';
import { UserService } from '../../services/user-service/user.service';
import { NavService } from '../../services/nav-service/nav.service';
import { TeamService } from '../../services/team-service/team.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})

export class ProjectDetailsComponent implements OnInit {
  public selectedProjectId: number;
  public enablePhaseDrag: boolean = true;

  constructor(
    public projectsService: ProjectsService,
    public userService: UserService,
    public navService: NavService,
    public teamService: TeamService,
    public route: ActivatedRoute,
    public location: Location
   ) {}

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    // Reset Progress Bar
    this.projectsService.phases = [];

    // Render Navigation Bar
    this.navService.changeToDetailsPage();

    // Get Current Project Id
    this.route.params.subscribe(params => this.selectedProjectId = +params['id']);

    // Get Project Info
    this.route.params.subscribe(params => this.projectsService.getProject(+params['id'], false));
  }

  addNewPhase(): void {
    this.projectsService.createPhase(this.selectedProjectId);
  }

  updatePhaseOrder(): void {
    let phaseOrder = '';

    this.projectsService.phases.forEach( (phase, index) => {
      if(index === this.projectsService.phases.length - 1) {
        phaseOrder += phase.id;
      } else {
        phaseOrder += phase.id + ' ';
      }
    })

    this.projectsService.updatePhaseOrder(this.selectedProjectId, phaseOrder);
  }
}
