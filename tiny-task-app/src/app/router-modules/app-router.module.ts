import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components for Router
import { ProjectsComponent } from '../projects/projects.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { ProjectDetailsComponent } from '../projects/project-details/project-details.component';
import { TeamsComponent } from '../teams/teams.component';

// Routes to components
const routes: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:id', component: ProjectDetailsComponent},
  { path: 'profile', component: UserProfileComponent },
  { path: 'teams', component: TeamsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})

export class AppRouterModule { }
