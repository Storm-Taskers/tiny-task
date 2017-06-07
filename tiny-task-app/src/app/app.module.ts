import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


// Bootstrap top-level application
import { AppComponent } from './app.component';
import { Auth0Component } from './auth0/auth0.component';
import { AppRouterModule } from './router-modules/app-router.module';
import { HomeComponent } from './auth0/home/home.component';

import { ROUTES } from './auth0/auth0.routes';

// Import application services
import { UserService } from './services/user-service/user.service';
import { ProjectsService } from './services/projects-service/projects.service';
import { NavService } from './services/nav-service/nav.service';
import { TeamService } from './services/team-service/team.service';
import { AuthService } from './services/auth-service/auth.service';

// Import application sub-components
import { UserInfoComponent } from './user-info/user-info.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { PhasesComponent } from './projects/project-details/phases/phases.component';
import { ProjectUserComponent } from './projects/project-details/project-user/project-user.component';
import { TeamMembersComponent } from './projects/project-details/team-members/team-members.component';
import { TasksComponent } from './projects/project-details/phases/tasks/tasks.component';
import { UserDetailsComponent } from './projects/project-details/project-user/user-details/user-details.component';
import { CallbackComponent } from './auth0/callback/callback.component';

// Import Materials
import { MaterialModule } from './material-modules/material.module';
import { InlineEditorModule } from '@qontu/ngx-inline-editor';
import { TeamsComponent } from './teams/teams.component';
import { TeamDetailsComponent } from './teams/team-details/team-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    UserProfileComponent,
    ProjectsComponent,
    ProjectDetailsComponent,
    PhasesComponent,
    TasksComponent,
    ProjectUserComponent,
    UserDetailsComponent,
    TeamMembersComponent,
    TeamsComponent,
    HomeComponent,
    CallbackComponent,
    TeamDetailsComponent,
    PageNotFoundComponent,
    Auth0Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule,
    MaterialModule,
    InlineEditorModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [UserService, ProjectsService, NavService, TeamService, AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
