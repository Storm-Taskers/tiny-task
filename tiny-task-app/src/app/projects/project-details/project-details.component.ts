import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { ProjectsService } from '../../services/projects-service/projects.service';

import { Phase } from './phases/Phase';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  projectPhases: Phase[];

  constructor(
    private projectsService: ProjectsService,
    private route: ActivatedRoute,
    private location: Location
   ) { }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.projectsService.getPhases(+params['id']))
      .subscribe(phases => this.projectPhases = phases);
  }
}
