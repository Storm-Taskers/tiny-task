import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

// Import ReactiveJS toPromise
import 'rxjs/add/operator/toPromise';

import { Bulletin-Board } from '../../bulletin-board/bulletin-board';
import { Announcement } from '../../bulletin-board/bulletin-board-details/announcements/announcements';
import { User } from '../../bulletin-board/bulletin-board-details/announcements-user/User';


@Injectable()
export class BulletinBoardService {
  private headers = new Headers({'Content-type': 'application/JSON'});
  private baseUrl: string = 'http://localhost:8080';

  public announcementIds: number[] = [];

  public announcements: announcement[] = [];
  public usersOnAnnouncement: User[];


  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

  // Fetch Information
  getAnnouncements(bulletinBoardId: number): void {
    this.http.get(`${this.baseUrl}/api/announcements/${teamId}`)
      .toPromise()
      .then( (response) => {
        this.anouncements.push(response.json().announcement_info);
        this.usersOnAnnouncement = response.json().user_info;
      })
      .catch(this.handleError);
  }

  // Post Information
  createAnnouncement(teamId: number, userId: number): void {
    this.http.post(
      `${this.baseUrl}/api/announcements`,
      JSON.stringify({announcement_name: 'New Announcement', user_id: userId, team_id: teamId}),
      {headers: this.headers})
      .toPromise()
      .then( (response) => {
        this.announcements.push(response.json().announcement_info);
        this.announcementIds.push(response.json().announcement_info.id);
      })
      .catch(this.handleError);
  }

  // Edit Information
  editAnnouncement(announcementId: number, announcementName: string): void {
    this.http.put(
      `${this.baseUrl}/api/announcements/${announcementId}`,
      JSON.stringify({announcementId: announcementId, announcementChanges: {announcement_name: announcementName}}),
      {headers: this.headers})
      .toPromise()
      .then( (response) => {
        this.announcements.find(announcement => announcement.id === announcementId).announcement_name = announcementName;
      })
      .catch(this.handleError);
  }

  // Delete Information
  deleteAnnouncement(announcementId: number): void {
    this.http.delete(`${this.baseUrl}/api/announcements/${announcementId}`)
      .toPromise()
      .then( (response) => {
        let announcementToRemove = this.announcements.findIndex(announcement => announcement.id === announcementId);
        this.announcements.splice(announcementToRemove, 1);
      })
      .catch(this.handleError);
  }