import { Component, OnInit } from '@angular/core';

import { NavService } from './services/nav-service/nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title: string = 'Tiny Task';
  currentPage: string;

  constructor(private navService: NavService) { }

  ngOnInit() {
    this.currentPage = this.navService.currentPage;
  }

  changeToProjectsView(): void {
    this.navService.changeToProjectsPage();
    this.currentPage = this.navService.currentPage;
  }
}