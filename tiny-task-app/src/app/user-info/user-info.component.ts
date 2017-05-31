import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service/user.service';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  userProfile: any = {};

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userProfile = this.userService.userProfile;
    // this.userService.getUserProfile(this.userToken)
    //   .then(userProfile => { this.userProfile = userProfile; console.log(this.userProfile); } );
    console.log('User Info:', this.userProfile);
  }

}
