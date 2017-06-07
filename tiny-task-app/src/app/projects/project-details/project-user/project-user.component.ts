import { Component, OnInit, Input } from '@angular/core';

import { User } from './User';

@Component({
  selector: 'user',
  templateUrl: './project-user.component.html',
  styleUrls: ['./project-user.component.css']
})
export class ProjectUserComponent implements OnInit {
  @Input() user: User;
  @Input() teamMenu: boolean;
  @Input() projectMenu: boolean;
  @Input() removeFromTeam;

  constructor() { }

  ngOnInit() {

  }
}
