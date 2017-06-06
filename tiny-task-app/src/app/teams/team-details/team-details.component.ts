import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { TeamService } from '../../services/team-service/team.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {
  private teamId: number;

  constructor(
    private teamService: TeamService,
    private route: ActivatedRoute,
    private location: Location
  ) { }


  ngOnInit() {
    // Get Current Team Id
    this.route.params.subscribe(params => this.teamId = +params['id']);

    // Get Team Info
    this.route.params.subscribe(params => this.teamService.getTeamInfo(+params['id']));
  }

}
