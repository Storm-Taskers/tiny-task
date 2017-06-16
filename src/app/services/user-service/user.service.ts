import { Headers, Http } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';

// Import ReactiveJS toPromise
import 'rxjs/add/operator/toPromise';

import { User } from '../../projects/project-details/project-user/User';
import { environment } from '../../../environments/environment';


@Injectable()
export class UserService {
  public userUpdate: EventEmitter<any> = new EventEmitter();
  private headers = new Headers({'Content-Type': 'application/JSON'});
  private baseUrl: string = environment.serverUrl;

  public userId: number;
  public userProfile: User;
  public availability: string;

  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

  getUserInfo(token: any): void {
    this.http.post(
      `${this.baseUrl}/api/users/${token.sub}`,
       JSON.stringify(token),
       {headers: this.headers})
      .toPromise()
      .then( (response) => {
        this.userProfile = response.json().user_profile;
        this.availability = this.userProfile.user_availability;
        this.userId = response.json().user_profile.id;
        this.userUpdate.emit(response.json());
      })
      .catch(this.handleError);
  }

  getUserProfile(userId: number): Promise<User> {
    return this.http.get(`${this.baseUrl}/api/users/profile/${userId}`)
            .toPromise()
            .then(response => {
              return response.json();
            })
            .catch(this.handleError);
            //testing
  }

  updateUserStatus(status: string): void {
    this.http.put(
      `${this.baseUrl}/api/users/${this.userId}`,
      JSON.stringify({user_status: status}),
      {headers: this.headers})
      .toPromise()
      .then(response => {
        return response.json();
      })
      .catch(this.handleError);
  }

  updateUserAvailability(available: string): void {
    this.http.put(
      `${this.baseUrl}/api/users/${this.userId}`,
      JSON.stringify({user_availability: available}),
      {headers: this.headers})
      .toPromise()
      .then(response => {
        this.availability = response.json().user_availability
      })
      .catch(this.handleError);
  }
}
