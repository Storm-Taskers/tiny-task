import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components for Router
import { ProjectsComponent } from '../projects/projects.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { ProjectDetailsComponent } from '../projects/project-details/project-details.component';
import { TeamsComponent } from '../teams/teams.component';
import { TeamDetailsComponent } from '../teams/team-details/team-details.component';
import { TeamMembersComponent} from '../teams/team-details/team-members/team-members.component';
import { BulletinBoardComponent } from '../bulletin-board/bulletin-board.component';
import { SharedResourceComponent } from '../shared-resources/shared-resources.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { HomeComponent } from '../auth0/home/home.component';

// Routes to components
const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:id', component: ProjectDetailsComponent},
  { path: 'projects/:projectid/teams/member/:id', component: TeamMembersComponent},
  { path: 'bulletinboard', component: BulletinBoardComponent},
  { path: 'sharedresource', component: SharedResourceComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'teams/:id/user/:teamUserId', component: TeamMembersComponent},
  { path: 'teams/:id', component: TeamDetailsComponent },
  { path: '', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})

export class AppRouterModule { }
