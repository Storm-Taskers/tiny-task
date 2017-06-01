import { Component, OnInit, Input } from '@angular/core';

import { ProjectsService } from '../../../services/projects-service/projects.service';

import { Phase } from './Phase';
import { Task } from './tasks/Task';

@Component({
  selector: 'phases',
  templateUrl: './phases.component.html',
  styleUrls: ['./phases.component.css']
})

export class PhasesComponent implements OnInit {
  @Input() phase: Phase;
  phaseTasks: Task[];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    // this.projectsService.getPhaseTasks(this.phase.id)
    //   .then(tasks => this.phaseTasks = tasks);
  }

}
