import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service/auth.service';


@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {
  profile: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}