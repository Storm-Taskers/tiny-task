import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components for Router

// Routes to components
const routes: Routes = [
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})

export class AppRouterModule { }
