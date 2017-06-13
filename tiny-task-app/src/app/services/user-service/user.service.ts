import { Headers, Http } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';

// Import ReactiveJS toPromise
import 'rxjs/add/operator/toPromise';

import { User } from '../../projects/project-details/project-user/User';


@Injectable()
export class UserService {
  public userUpdate: EventEmitter<any> = new EventEmitter();
  private headers = new Headers({'Content-Type': 'application/JSON'});
  private baseUrl: string = 'http://localhost:8080';

  public userId: number;
  public userProfile: User;

  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

  getUserInfo(token: string): void {
    this.http.get(`${this.baseUrl}/api/users/${token}`)
      .toPromise()
      .then( (response) => {
        console.log(response.json());
        this.userProfile = response.json().user_profile;
        this.userId = response.json().user_profile.id;
        this.userUpdate.emit(response.json());
      })
      .catch(this.handleError);
    }
}
