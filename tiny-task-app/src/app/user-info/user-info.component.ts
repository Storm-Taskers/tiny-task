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
    // Stub 's' for user profile
    this.userService.getUserProfile('s')
      .then( (userProfile) => { this.userProfile = userProfile; } );
    console.log('User Info:', this.userProfile);
  }

}
