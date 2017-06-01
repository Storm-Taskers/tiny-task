import { Injectable } from '@angular/core';

@Injectable()
export class NavService {
  public currentPage: string = 'projects';

  constructor() { }

  changeToDetailsPage(): void {
    this.currentPage = 'details';
  }

  changeToProjectsPage(): void {
    this.currentPage = 'projects';
  }
}
