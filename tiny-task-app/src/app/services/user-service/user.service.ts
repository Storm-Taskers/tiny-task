import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

// Import ReactiveJS Observables
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  private headers = new Headers({'Content-Type': 'application/JSON'});
  private baseUrl: string = 'http://localhost:4200';
  public userId: string = 'test';
  public userProfile: object = {fullname: 'Kevin Nguyen', email: 'contact@example.com'};
  public projectIds: number[] = [1, 2, 3];

  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

  getUserProfile(token: string): Promise<object> {
    return this.http.get(`${this.baseUrl}/user/${token}`)
            .toPromise()
            .then( (response) => {
              // this.userProfile =
              // this.projectIds =
              return response.json().data as object;
            })
            .catch(this.handleError);
  }

}
