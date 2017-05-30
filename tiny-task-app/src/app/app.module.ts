import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Boot-strap of App
import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';

import { TeamMembersComponent } from './project/team-members/team-members.component';
import { PhaseComponent } from './project/phase/phase.component';
import { UserComponent } from './project/user/user.component';
import { TaskComponent } from './project/phase/task/task.component';
import { UserTaskComponent } from './project/user/user-task/user-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamMembersComponent,
    PhaseComponent,
    UserComponent,
    TaskComponent,
    UserTaskComponent
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
