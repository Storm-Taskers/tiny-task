import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

// Import ReactiveJS toPromise
import 'rxjs/add/operator/toPromise';

import { Announcement } from '../../bulletin-board/announcement';


@Injectable()
export class BulletinBoardService {
  private headers = new Headers({'Content-type': 'application/JSON'});
  private baseUrl: string = 'http://localhost:8080';

  public announcementIds: number[] = [];

  public announcements: string[] = [];
  public announcementUser: number [];


  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

  // Fetch Information
  getAnnouncements(teamId: number): void {
    console.log(teamId, 'teamId');
    this.http.get(`${this.baseUrl}/api/announcements/${teamId}`)
      .toPromise()
      .then( (response) => {
        console.log(this.announcements, 'announcement array');
        console.log(response.json(), 'response');
        this.announcements = response.json();
      }).then(() => {
        console.log(this.announcements, 'announcements');
      })
      .catch(this.handleError);
  }

  // Post Information
  createAnnouncement(teamId: number, userId: number, announcement: string): void {
    this.http.post(
      `${this.baseUrl}/api/announcements`,
      JSON.stringify({announcement: announcement, user_id: userId, team_id: teamId}),
      {headers: this.headers})
      .toPromise()
      .then( (response) => {
        this.announcements.push(response.json().announcement);
        this.announcementIds.push(response.json().id);
      })
      .catch(this.handleError);
  }

  // Edit Information
  editAnnouncement(announcementId: number, announcement: string): void {
    this.http.put(
      `${this.baseUrl}/api/announcements/${announcementId}`,
      JSON.stringify({announcementId: announcementId, announcementChanges: {announcement: announcement}}),
      {headers: this.headers})
      .toPromise()
      .then( (response) => {
        this.announcements.find(announcement => announcementId === announcementId)
      })
      .catch(this.handleError);
  }

  // Delete Information
  deleteAnnouncement(announcementId: number): void {
    this.http.delete(`${this.baseUrl}/api/announcements/${announcementId}`)
      .toPromise()
      .then( (response) => {
        let announcementToRemove = this.announcements.findIndex(announcement => announcementId === announcementId);
        this.announcements.splice(announcementToRemove, 1);
      })
      .catch(this.handleError);
  }
}
