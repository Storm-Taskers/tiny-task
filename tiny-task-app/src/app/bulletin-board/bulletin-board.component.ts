import { Component, OnInit, Input } from '@angular/core';
import { BulletinBoardService } from '../services/bulletin-board-service/bulletin-board.service';
import { UserService } from '../services/user-service/user.service';
import { TeamService } from '../services/team-service/team.service';
import { NavService } from '../services/nav-service/nav.service';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class BulletinBoardComponent implements OnInit {
  private value: any = 'all';

  constructor(
    private bulletinBoardService: BulletinBoardService,
    private userService: UserService,
    private teamService: TeamService,
    private navService: NavService,
  ) { }


  ngOnInit() {
    // Render Navigation Bar
    this.navService.changeToBulletinBoardPage();
    this.value = this.navService.lastVisitedAnnouncement;

    this.BulletinBoardService.announcements = [];

    if ( !this.userService.userId ) {
      this.userService.userUpdate.subscribe( (userData) => {
        // Team Rendering
        this.teamService.getUserTeams(userData.user_profile.id);

        // Project Rendering
        this.bulletinBoardService.announcementIds = userData.announcement_id;
        this.bulletinBoardService.announcementIds.forEach((announcementId) => {
          this.bulletinBoardService.getAnnouncements(announcementId);
        });
      });
    } else {
      this.teamService.getUserTeams(this.userService.userId);
      this.bulletinBoardService.announcementIds.forEach((announcementId) => {
          this.bulletinBoardService.getAnnouncements(announcementId);
      });
    }
  }

  addNewAnnouncement(): void {
    let teamId: number = this.teamService.currentTeam.id;
    let userId: number = this.userService.userId;

    this.bulletinBoardService.createAnnouncement(teamId, userId);
  }

  deleteAnnouncement(announcementId: number, announcementName: string): void {
    if (confirm(`Are you sure you want to delete "${announcementName}"?`)) {
      this.bulletinBoardService.deleteAnnouncement(announcementId);
    }
  }

  editAnnouncement(announcementId: number, announcementName: string): void {
    this.bulletinBoardService.editAnnouncement(announcementId, announcementName);
  }

  handleError(): void {
    alert("50 Character Limit Exceeded");
  }
}