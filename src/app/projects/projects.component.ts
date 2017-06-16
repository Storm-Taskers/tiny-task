import { Component, OnInit, Input } from '@angular/core';
import { ProjectsService } from '../services/projects-service/projects.service';
import { UserService } from '../services/user-service/user.service';
import { TeamService } from '../services/team-service/team.service';
import { NavService } from '../services/nav-service/nav.service';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {
  public value: any = 'all';

  constructor(
    public projectsService: ProjectsService,
    public userService: UserService,
    public teamService: TeamService,
    public navService: NavService,
  ) { }


  ngOnInit() {
    // Render Navigation Bar
    this.navService.changeToProjectsPage();

    this.value = this.navService.lastVisitedProject || 'all';

    this.projectsService.projects = [];

    if ( !this.userService.userId ) {
      this.userService.userUpdate.subscribe( (userData) => {
        // Team Rendering
        this.teamService.getUserTeams(userData.user_profile.id);

        // Project Rendering
        this.projectsService.projectIds = userData.project_id;
        this.projectsService.projectIds.forEach((projectId) => {
          this.projectsService.getProject(projectId, true);
        });
      });
    } else {
      this.teamService.getUserTeams(this.userService.userId);
      if ( this.projectsService.projectIds.length !== 0 ) {
        this.projectsService.projectIds.forEach((projectId) => {
          this.projectsService.getProject(projectId, true);
        });
      } else {
        this.projectsService.getUserProjects(this.userService.userId).then(() => {
          this.projectsService.projectIds.forEach((projectId) => {
            this.projectsService.getProject(projectId, true);
          })
        });
      }
    }
  }

  showDetails(): void {
    this.navService.changeToDetailsPage();
  }

  addNewProject(): void {
    let teamId: number = this.teamService.currentTeam;
    let teamName: string = this.teamService.selectedTeamInfo.team_name;
    let userId: number = this.userService.userId;

    this.projectsService.createProject(teamId, userId, teamName);
  }

  deleteProject(projectId: number, projectName: string): void {
    if (confirm(`Are you sure you want to delete "${projectName}"?`)) {
      this.projectsService.deleteProject(projectId);
    }
  }

  setTeamProjects(event: Event): void {
    this.projectsService.projects = [];
    if ( this.value !== 'all' ) {
      this.navService.lastVisitedProject = this.value;
      this.teamService.currentTeam = this.value;
      this.teamService.getTeamInfo(this.value);

      this.projectsService.getTeamProjects(this.value).then(() => {
        this.projectsService.projectIds.forEach((projectId) => {
          this.projectsService.getProject(projectId, true);
        })
      });
    } else {
      this.navService.lastVisitedProject = 'all';
      this.teamService.currentTeam = null;
      this.teamService.selectedTeamInfo = null;
      this.teamService.selectedTeamUserInfo = null;
      this.projectsService.getUserProjects(this.userService.userId).then(() => {
        this.projectsService.projectIds.forEach((projectId) => {
          this.projectsService.getProject(projectId, true);
        })
      });
    }
  }

  editProjectName(projectId: number, newName: string): void {
    this.projectsService.editProjectName(projectId, newName);
  }

  updateProjectStatus(event: any) {
    this.toggleCompleteProject(event.dragData.id, event.dragData.project_name, event.dragData.complete)
  }

  toggleCompleteProject(projectId: number, projectName: string, projectCompleted: boolean): void {
    this.projectsService.editProjectCompleteStatus(projectId, projectName, !projectCompleted);
  }

  handleError(): void {
    alert("50 Character Limit Exceeded");
  }
}