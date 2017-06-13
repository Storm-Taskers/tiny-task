import { Component, OnInit, Input } from '@angular/core';
import { BulletinBoardService } from '../services/bulletin-board-service/bulletin-board.service';
import { UserService } from '../services/user-service/user.service';
import { TeamService } from '../services/team-service/team.service';

@Component({
  selector: 'bulletinBoard',
  templateUrl: './bulletin-board.component.html',
  styleUrls: ['./bulletin-board.component.css']
})

export class BulletinBoardComponent implements OnInit {
  private value: any = 'all';
  private teamId: number = this.teamService.currentTeam
  public announcements: string[] = this.bulletinBoardService.announcements = [];

  constructor(
    private bulletinBoardService: BulletinBoardService,
    private userService: UserService,
    private teamService: TeamService,
  ) { }


  ngOnInit() {

    if ( !this.userService.userId ) {
      this.userService.userUpdate.subscribe( (userData) => {
        // Team Rendering
        this.teamService.getUserTeams(userData.user_profile.id);

        // Project Rendering
        this.bulletinBoardService.announcementIds = userData.announcement_id;
        this.bulletinBoardService.announcementIds.forEach((announcementId) => {
          this.bulletinBoardService.getAnnouncements(announcementId, this.teamId);
        });
      });
    } else {
      this.teamService.getUserTeams(this.userService.userId);
      this.bulletinBoardService.announcementIds.forEach((announcementId) => {
          this.bulletinBoardService.getAnnouncements(announcementId, this.teamId);
      });
    }
  }

  addNewAnnouncement(): void {
    let teamId: number = this.teamService.currentTeam;
    let userId: number = this.userService.userId;

    this.bulletinBoardService.createAnnouncement(teamId, userId);
  }

  deleteAnnouncement(announcementId: number, announcement: string): void {
    if (confirm(`Are you sure you want to delete "${announcement}"?`)) {
      this.bulletinBoardService.deleteAnnouncement(announcementId);
    }
  }

  editAnnouncement(announcementId: number, announcement: string): void {
    this.bulletinBoardService.editAnnouncement(announcementId, announcement);
  }

  handleError(): void {
    alert("50 Character Limit Exceeded");
  }
}