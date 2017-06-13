import { Component, OnInit, Input } from '@angular/core';

import { User } from './User';
import { Team } from '../../../teams/Team';

@Component({
  selector: 'user',
  templateUrl: './project-user.component.html',
  styleUrls: ['./project-user.component.css']
})
export class ProjectUserComponent implements OnInit {
  @Input() user: User;
  @Input() teamMenu: boolean;
  @Input() removeFromTeam;
  @Input() team: Team;

  constructor() { }

  ngOnInit() {
  }
}
