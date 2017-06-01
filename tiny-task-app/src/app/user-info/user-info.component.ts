import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service/user.service';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})

export class UserInfoComponent implements OnInit {
  public userProfile: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userProfile = this.userService.userProfile;
    // Stub 's' for user profile
    // this.userService.getUserInfo('s')
    //   .then(userProfile => this.userProfile = userProfile);
    console.log('User Info:', this.userProfile);
  }
}
