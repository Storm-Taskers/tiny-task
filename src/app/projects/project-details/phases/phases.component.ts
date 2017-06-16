import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MdDialog } from '@angular/material';

import { AssignUserTaskComponent } from '../../../task-dialogs/assign-user-task/assign-user-task.component';
import { AssignTaskWeightComponent } from '../../../task-dialogs/assign-task-weight/assign-task-weight.component';

import { ProjectsService } from '../../../services/projects-service/projects.service';
import { DragService } from '../../../services/drag-service/drag.service';

import { Phase } from './Phase';
import { Task } from './tasks/Task';

@Component({
  selector: 'phases',
  templateUrl: './phases.component.html',
  styleUrls: ['./phases.component.css']
})

export class PhasesComponent implements OnInit {
  @Input() phase: Phase;
  public phaseTasks: Task[];
  public enableTaskDrag: boolean = false;
  public taskEditing: boolean = false;

  constructor(
    private projectsService: ProjectsService,
    private dragService: DragService,
    private dialog: MdDialog
  ) { }

  ngOnInit() {
    this.projectsService.getTasks(this.phase.id).then((result: any) => {
      this.phaseTasks = result.task_info;
    });

    this.dragService.dragUpdate.subscribe(drag => {
      this.enableTaskDrag = drag.taskDrag;
      this.taskEditing = drag.taskEdit;
    });
  }

  disableDrag(): void {
    if ( !this.taskEditing ) {
      this.dragService.enableTaskDrag();
    }
  }

  enableDrag(): void {
    if ( !this.taskEditing ) {
      this.dragService.enablePhaseDrag();
    }
  }

  openAssignUsers(taskId: number): void {
    let results = {};
    this.projectsService.usersOnProject.forEach((user) => {
      results[user.id] = false;
    });

    this.projectsService.getUsersOnTask(taskId)
      .then(users => {
        users.forEach((user) => {
          results[user.user_id] = true;
        });

        let userTaskDialog = this.dialog.open(AssignUserTaskComponent, {
          data: Object.assign({}, results)
        });

        userTaskDialog.afterClosed().subscribe(changes => {
          for ( let id in changes ) {
            if ( results[id] !== changes[id] ) {
              if ( changes[id] ) {
                this.projectsService.assignToTask(+id, taskId, this.projectsService.currentProject.team_id);
              } else {
                this.projectsService.removeUserFromTask(+id, taskId);
              }
            }
          }
        });
      });
  }

  openTaskWeight(taskId: number): void {
    this.projectsService.getTaskInfo(taskId)
      .then(current => {
        let weightTaskDialog = this.dialog.open(AssignTaskWeightComponent);
        weightTaskDialog.afterClosed().subscribe(weight => {
          if ( current !== weight ) {
            this.projectsService.updateTaskWeight(taskId, weight, current.task_weight);
          }
        });
      });
  }

  editPhaseName(phaseId: number, newName: string): void {
    this.projectsService.editPhaseName(phaseId, newName);
  }

  deletePhase(phaseId: number): void {
    if (confirm('Are you sure you want to delete this phase?')) {
      this.projectsService.deletePhase(phaseId, this.phaseTasks);
    }
  }

  addNewTask(phaseId: number): void {
    this.projectsService.createTask(phaseId)
      .then((task) => {
        this.phaseTasks.push(task);
      });
  }

  addUserToTask(userId: number, taskId: number): void {
    this.projectsService.assignToTask(userId, taskId, this.projectsService.currentProject.team_id);
  }

  removeUserFromTask(userId: number, taskId: number): void {
    this.projectsService.removeUserFromTask(userId, taskId);
  }

  deleteTask(taskId: number, task: Task): void {
    this.projectsService.deleteTask(taskId, task);
    this.phaseTasks.splice(this.phaseTasks.findIndex(task => task.id === taskId), 1);
  }

  updateTaskPhaseId(event: any, taskId: number): void {
    let current = event.target;
    while(!current.getAttribute("data-phase")) {
      current = current.parentElement;
    }
    let phaseId = parseInt(current.getAttribute("data-phase"), 10);
    this.projectsService.updateTaskPhaseId(taskId, phaseId);
  }

  toggleTaskComplete(taskId: number, task: Task) {
    this.projectsService.updateTaskStatus(taskId, !task.complete);
    this.phaseTasks.find(task => task.id === taskId).complete = !task.complete;
  }

  handleError(): void {
    alert("50 Character Limit Exceeded");
  }
}
