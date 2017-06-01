import { Injectable } from '@angular/core';

@Injectable()
export class NavService {
  public currentPage: string = 'projects';
  public showSpecificProject: boolean = false;

  constructor() { }

  changeToDetailsPage(): void {
    this.currentPage = 'details';
  }

  changeToProjectsPage(): void {
    this.currentPage = 'projects';
  }

  toggleProject(): void {
    this.showSpecificProject = !this.showSpecificProject;
  }
}
