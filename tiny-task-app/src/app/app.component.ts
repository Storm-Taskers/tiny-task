import { Component } from '@angular/core';

import { NavService } from './services/nav-service/nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'Tiny Task';

  constructor(private navService: NavService) { }
}