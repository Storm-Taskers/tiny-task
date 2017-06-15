import { Component } from '@angular/core';

import { NavService } from './services/nav-service/nav.service';
import { AuthService } from './services/auth-service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'Tiny Task.';
  showNav: boolean = true;

  constructor(
    public navService: NavService,
    public authService: AuthService
  ) { }

  toggleMiniBar(): void {
    this.showNav = !this.showNav;
  }
}