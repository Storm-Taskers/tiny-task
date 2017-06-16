import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Import Observable Class Extensions
import 'rxjs/add/observable/of';

// Import Observable Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { TeamService } from '../../services/team-service/team.service';
import { NavService } from '../../services/nav-service/nav.service';

import { User } from '../../projects/project-details/project-user/User';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {
  public teamId: number;
  public render: boolean = false;
  public term: string;

  public users: Observable<User[]>;
  public memberSearchTerms = new Subject<string>();

  constructor(
    public teamService: TeamService,
    public navService: NavService,
    public route: ActivatedRoute,
    public location: Location
  ) { }

  ngOnInit() {
    // Get Current Team Id
    this.route.params.subscribe(params => this.teamService.currentTeam = this.teamId = +params['id']);

    // Get Team Info
    this.route.params.subscribe(params => {
      this.teamService.getTeamInfo(+params['id']);
      this.navService.lastVisitedProject = this.teamService.selectedTeamInfo.team_name;
    });

    // Set Up Member Search Observable
    this.users = this.memberSearchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term ? this.teamService.findAllUsers(term) : Observable.of<User[]>([]))
      .catch(error => {
        console.error(error);
        return Observable.of<User[]>([]);
      });
  }

  renderTeamAdd(): void {
    this.render = !this.render;
  }

  removeFromTeam(): any {
    return (userId: number) => {
      return this.teamService.removeFromTeam(this.teamId, userId);
    };
  }

  searchMembers(name: string): void {
    this.memberSearchTerms.next(name);
  }

  addTeamUser(user: User): void {
    this.term = '';
    this.memberSearchTerms.next('');
    if ( this.teamService.selectedTeamUserInfo.findIndex(selected => selected.id === user.id) === -1 ) {
      this.teamService.addTeamMember(this.teamId, user.id);
    }
  }
}
