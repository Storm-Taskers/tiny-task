import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title: string = 'Tiny Task';
  private currentPageView: string;
  authToken: string;

  ngOnInit() {
    this.currentPageView = 'projects';
    this.authToken = 'test';
  }

  showProjectNav(): void {
    this.currentPageView = 'projects';
  }
}
