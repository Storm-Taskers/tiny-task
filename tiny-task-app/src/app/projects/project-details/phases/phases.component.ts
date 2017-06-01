import { Component, OnInit } from '@angular/core';

import { Phase } from './Phase';

@Component({
  selector: 'app-phases',
  templateUrl: './phases.component.html',
  styleUrls: ['./phases.component.css']
})

export class PhasesComponent implements OnInit {
  phase: Phase;

  constructor() { }

  ngOnInit() {

  }

}
