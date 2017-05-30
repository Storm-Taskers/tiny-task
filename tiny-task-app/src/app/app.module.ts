import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Bootstrap top-level application
import { AppComponent } from './app.component';
import { AppRouterModule } from './router-modules/app-router.module';

// Import application sub-components
import { NavComponent } from './nav/nav.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { PhasesComponent } from './projects/project-details/phases/phases.component';
import { UserComponent } from './projects/project-details/user/user.component';
import { TeamMembersComponent } from './projects/project-details/team-members/team-members.component';
import { PhaseDetailsComponent } from './projects/project-details/phases/phase-details/phase-details.component';
import { UserDetailsComponent } from './projects/project-details/user/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UserProfileComponent,
    ProjectsComponent,
    ProjectDetailsComponent,
    PhasesComponent,
    PhaseDetailsComponent,
    UserComponent,
    UserDetailsComponent,
    TeamMembersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
