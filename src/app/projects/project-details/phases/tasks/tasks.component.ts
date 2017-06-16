import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ProjectsService } from '../../../../services/projects-service/projects.service';

import { Task } from './Task';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent {
  @Input() task: Task;
  public taskEditing: boolean = false;

  constructor(private projectsService: ProjectsService) { }

  editTaskName(taskId: number, newName: string): void {
    this.projectsService.editTaskName(taskId, newName)
      .then((updatedTask) => {
        this.task = updatedTask;
      });
  }

  handleError(): void {
    alert("144 Character Limit Exceeded");
  }

  disableAllDrag(): void {
    // Disable all dragging and set taskEditing to be true

    // this.taskEditing = true;
    // this.taskDrag = false;
    // this.dragOperation = false;
    // console.log("disable all drag:", this.taskEditing, this.taskDrag, this.dragOperation)

    // this.taskEditingChange.emit(this.taskEditing);
    // this.dragOperationChange.emit(this.dragOperation);
    // this.taskDragChange.emit(this.taskDrag);
  }

  enablePhaseDrag(): void {
    // Enable phase drag, disable taskdrag, and set taskEditing to be false

    // this.taskEditing = false;
    // this.taskDrag = false;
    // this.dragOperation = true;
    // console.log("enable phase drag:", this.taskEditing, this.taskDrag, this.dragOperation);

    // this.taskEditingChange.emit(this.taskEditing);
    // this.dragOperationChange.emit(this.dragOperation);
    // this.taskDragChange.emit(this.taskDrag);
  }
}