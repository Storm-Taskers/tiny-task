import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components for Router
import { ProjectsComponent } from '../projects/projects.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';

// Routes to components
const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: '', redirectTo: 'projects', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})

export class AppRouterModule { }
