import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user-service/user.service';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  @Input() userToken: string;

  userProfile: object;
  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log(this.userToken);
    // this.userService.getUserProfile(this.userToken)
    //   .then(userProfile => { this.userProfile = userProfile; console.log(this.userProfile); } );
  }

}
