import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Bootstrap top-level application
import { AppComponent } from './app.component';
import { AppRouterModule } from './router-modules/app-router.module';

// Import application services
import { UserService } from './services/user-service/user.service';
import { ProjectsService } from './services/projects-service/projects.service';
import { NavService } from './services/nav-service/nav.service';

// Import application sub-components
import { UserInfoComponent } from './user-info/user-info.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { PhasesComponent } from './projects/project-details/phases/phases.component';
import { ProjectUserComponent } from './projects/project-details/project-user/project-user.component';
import { TeamMembersComponent } from './projects/project-details/team-members/team-members.component';
import { PhaseDetailsComponent } from './projects/project-details/phases/phase-details/phase-details.component';
import { UserDetailsComponent } from './projects/project-details/project-user/user-details/user-details.component';

// Import Materials
import { MaterialModule } from './material-modules/material.module';

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    UserProfileComponent,
    ProjectsComponent,
    ProjectDetailsComponent,
    PhasesComponent,
    PhaseDetailsComponent,
    ProjectUserComponent,
    UserDetailsComponent,
    TeamMembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule,
    MaterialModule
  ],
  providers: [UserService, ProjectsService, NavService],
  bootstrap: [AppComponent]
})

export class AppModule {}
