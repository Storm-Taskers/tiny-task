import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import { ProjectsService } from '../../services/projects-service/projects.service';
import { UserService } from '../../services/user-service/user.service';
import { NavService } from '../../services/nav-service/nav.service';
import { TeamService } from '../../services/team-service/team.service';
import { DragService } from '../../services/drag-service/drag.service';

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
    public dragService: DragService,
    public route: ActivatedRoute,
    public router: Router,
    public location: Location
   ) {}

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    // Subscribe to drag events
    this.dragService.dragUpdate.subscribe(drag => {
      this.enablePhaseDrag = drag.phaseDrag;
    });

    // Reset Progress Bar
    this.projectsService.phases = [];

    // Render Navigation Bar
    this.navService.changeToDetailsPage();

    // Get Current Project Id
    this.route.params.subscribe(params => this.selectedProjectId = +params['id']);

    // Get Project Info
    this.route.params.subscribe(params => this.projectsService.getProject(+params['id'], false).then(result => {
      if ( result === null ) {
        this.router.navigate(['/projects']);
      }
    }));
  }

  addNewPhase(): void {
    this.projectsService.createPhase(this.selectedProjectId).then(() => {
      this.updatePhaseOrder();
    });
  }

  updatePhaseOrder(): void {
    let phaseOrder = '';

    this.projectsService.phases.forEach( (phase, index) => {
      if (index === this.projectsService.phases.length - 1) {
        phaseOrder += phase.id;
      } else {
        phaseOrder += phase.id + ' ';
      }
    })

    this.projectsService.updatePhaseOrder(this.selectedProjectId, phaseOrder);
  }
}
