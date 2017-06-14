import { Component, OnInit, Input } from '@angular/core';
import { BulletinBoardService } from '../services/bulletin-board-service/bulletin-board.service';
import { UserService } from '../services/user-service/user.service';
import { TeamService } from '../services/team-service/team.service';

import { Announcement } from './announcement'

@Component({
  selector: 'bulletinBoard',
  templateUrl: './bulletin-board.component.html',
  styleUrls: ['./bulletin-board.component.css']
})

export class BulletinBoardComponent implements OnInit {
  private value: any = 'all';
  private teamId: number = this.teamService.currentTeam
  public nameField: string;

  constructor(
    private bulletinBoardService: BulletinBoardService,
    private userService: UserService,
    private teamService: TeamService,
  ) { }


  ngOnInit() {
      this.bulletinBoardService.getAnnouncements(this.teamId);
  }

  addNewAnnouncement(announcement: string): void {
    let teamId: number = this.teamService.currentTeam;
    let userId: number = this.userService.userId;

    if (announcement !== '' && typeof announcement !== 'undefined') {
      this.bulletinBoardService.createAnnouncement(teamId, userId, announcement);
      this.nameField = '';
    }
  }

  deleteAnnouncement(announcementId: number, announcement: string): void {
    if (confirm(`Are you sure you want to delete "${announcement}"?`)) {
      this.bulletinBoardService.deleteAnnouncement(announcementId);
    }
  }

  editAnnouncement(announcement: string, announcementId: number): void {
    console.log(announcement, 'announcement');
    console.log(announcementId, 'id');
    this.bulletinBoardService.editAnnouncement(announcementId, announcement);
  }

  handleError(): void {
    alert("50 Character Limit Exceeded");
  }
}