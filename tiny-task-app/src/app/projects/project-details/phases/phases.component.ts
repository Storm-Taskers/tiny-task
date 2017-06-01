import { Component, OnInit, Input } from '@angular/core';

import { Phase } from './Phase';
import { Task } from '../Task';

@Component({
  selector: 'app-phases',
  templateUrl: './phases.component.html',
  styleUrls: ['./phases.component.css']
})

export class PhasesComponent implements OnInit {
  @Input() phase: Phase;
  phaseTasks: Task[];

  constructor() { }

  ngOnInit() {

  }

}
