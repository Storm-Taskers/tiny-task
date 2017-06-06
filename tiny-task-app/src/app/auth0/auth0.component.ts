import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth-service/auth.service';

@Component({
  selector: 'auth0',
  templateUrl: './auth0.component.html',
  styleUrls: ['./auth0.component.css']
})
export class Auth0Component implements OnInit {

  constructor(private auth: AuthService) {
    auth.handleAuthentication();
  }

  ngOnInit() {
  }

}
