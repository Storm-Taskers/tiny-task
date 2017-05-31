import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../services/http/http.service';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  @Input() userToken: string;

  userProfile: object;
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    console.log(this.userToken);
    // this.httpService.getUserProfile(this.userToken)
    //   .then(userProfile => { this.userProfile = userProfile; console.log(this.userProfile); } );
  }

}
