import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Project } from '../../projects/Project';
import { Phase } from '../../projects/project-details/phases/Phase';
import { Task } from '../../projects/project-details/phases/tasks/Task';

@Injectable()
export class ProjectsService {
  private headers = new Headers({'Content-type': 'application/JSON'});
  private baseUrl: string = 'http://localhost:4200';

  // MOCK DATA
  public projects: Project[] = [
    {
      id: 1,
      user_id: 't1',
      team_id: 1,
      project_name: 'Tiny Task',
      complete: false
    },
    {
      id: 2,
      user_id: 't2',
      team_id: 2,
      project_name: 'Make Millions',
      complete: false
    },
    {
      id: 3,
      user_id: 't3',
      team_id: 3,
      project_name: 'NOTED',
      complete: true
    }
  ];

  // MOCK DATA
  public phases: Phase[] = [
    {
      id: 1,
      project_id: 1,
      phase_name: 'First MVP',
      phase_color: 'green',
      phase_order: 1,
      phase_status: 'In progress'
    },
    {
      id: 2,
      project_id: 1,
      phase_name: 'Second MVP',
      phase_color: 'red',
      phase_order: 2,
      phase_status: 'Not Started'
    }
  ];

  public tasks: Task[] = [
    {
      id: 1,
      task_name: 'Start Project',
      phase_id: 1,
      task_status: 'Not Finished'
    },
    {
      id: 2,
      task_name: 'Finish Project',
      phase_id: 1,
      task_status: 'Not finished'
    },
    {
      id: 3,
      task_name: 'Get phases done',
      phase_id: 2,
      task_status: "Not finished"
    }
  ];

  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

  // Fetch Information
  getProject(projectId: number): Promise<Project> {
    return this.http.get(`${this.baseUrl}/api/project/${projectId}`)
            .toPromise()
            .then((response) => {
              // this.projects.push(???)
              return response.json();
            })
            .catch(this.handleError);
  }

  getPhases(projectId: number): void {
    // this.http.get(`${this.baseUrl}/api/phases/${projectId}`)
    //   .toPromise()
    //   .then((response) => {
    //     this.phases = response.json();
    //   })
    //   .catch(this.handleError);
  }

  getPhaseTasks(phaseId: number): Promise<Task[]> {
    return this.http.get(`${this.baseUrl}/api/tasks/phase/${phaseId}`)
            .toPromise()
            .then((response) => {
              return response.json();
            })
            .catch(this.handleError);
  }

  getUserTasks(token: string): Promise<Task[]> {
    return this.http.get(`${this.baseUrl}/api/tasks/user/${token}`)
            .toPromise()
            .then((response) => {
              return response.json();
            })
            .catch(this.handleError);
  }

  // Post Information

  // MOCK DATA
  public testProject: Project = {
                                  id: 4,
                                  user_id: 't4',
                                  team_id: 1,
                                  project_name: 'New Project',
                                  complete: false
                                }

  createProject(teamId: number, userId: string): void {
    this.projects.push(this.testProject);
  //   this.http.post(
  //     `${this.baseUrl}/api/project`,
  //     JSON.stringify({user_id: userId, team_id: teamId}))
  //     .toPromise()
  //     .then( (response) => {
  //       this.projects.push(response.json());
  //     })
  //     .catch(this.handleError);
  }

  // MOCK DATA
  public testPhase: Phase = {
                              id: 3,
                              project_id: 1,
                              phase_name: 'New Phase',
                              phase_color: 'green',
                              phase_order: 1,
                              phase_status: 'In progress'
                            };

  createPhase(projectId: number): void {
    this.phases.push(this.testPhase);
    // this.http.post(
    //   `${this.baseUrl}/api/project/${projectId}`,
    //   JSON.stringify({projectId: projectId, phaseName: "Phase"}))
    //   .toPromise()
    //   .then( (response) => {
    //     this.phases.push(response.json());
    //   })
    //   .catch(this.handleError);
  }

  createTask(phaseId: number, taskName: string): Promise<Task> {
    return this.http.post(
            `${this.baseUrl}/api/tasks/${phaseId}`,
            JSON.stringify({phaseId: phaseId, taskName: taskName}))
            .toPromise()
            .then( (response) => {
              return response.json();
            })
            .catch(this.handleError);
  }

  // Edit Information
  editProjectName(projectId: number, projectName: string): void {
    // this.http.put(
    //   `${this.baseUrl}/api/project/${projectId}`,
    //   JSON.stringify({projectId: projectId, projectName: projectName}))
    //   .toPromise()
    //   .then( (response) => {
    //     this.projects.find(project => project.id === projectId).project_name = projectName;
    //   })
    //   .catch(this.handleError);
  }

  editPhaseName(phaseId: number, projectName: string): void {
    // this.http.put(
    //   `${this.baseUrl}/api/phases/${phaseId}`,
    //   JSON.stringify({phase_name: projectName}))
    //   .toPromise()
    //   .then( (response) => {
    //     this.projects.find(project => project.id === projectId).project_name = projectName;
    //   })
    //   .catch(this.handleError);
  }

  // Delete Information
  deleteProject(projectId: number): Promise<void> {
    return this.http.delete(
      `${this.baseUrl}/api/project/${projectId}`,
      {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}