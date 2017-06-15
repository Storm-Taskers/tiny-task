import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user-service/user.service';
import { ProjectsService } from '../services/projects-service/projects.service';
import { AuthService } from '../services/auth-service/auth.service';


@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})

export class UserInfoComponent implements OnInit {
 
  constructor(
    public userService: UserService,
    public projectsService: ProjectsService,
    public authService: AuthService
   ) { }

  public status: string;
  public userImg: string;
  public userEmail: string;

  ngOnInit() {
    this.authService.getProfile((err, profile) => {
      this.userService.getUserInfo(this.authService.userProfile);
      this.userImg = profile.picture;
      this.userEmail = profile.email;
    });

    if(!this.status){
      this.userService.userUpdate.subscribe( (userData) => {
        this.status = userData.user_profile.user_status;
      })
    };
    console.log('Initiated');
  }

  updateUserStatus (event: string) {
    this.userService.updateUserStatus(event);
  }
}
