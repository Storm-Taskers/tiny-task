import { Component, OnInit } from '@angular/core';

import { ProjectsService } from '../services/projects-service/projects.service';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {

  constructor(private projects: ProjectsService) { }

  ngOnInit() {
    this.projects.
  }

}
