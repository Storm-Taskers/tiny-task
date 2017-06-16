import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { ProjectsService } from '../../../../services/projects-service/projects.service';
import { DragService } from '../../../../services/drag-service/drag.service';

import { Task } from './Task';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
  @Input() task: Task;
  public taskEditing: boolean = false;

  constructor(
    private projectsService: ProjectsService,
    private dragService: DragService
  ) { }

  editTaskName(taskId: number, newName: string): void {
    this.projectsService.editTaskName(taskId, newName)
      .then((updatedTask) => {
        this.task = updatedTask;
      });
  }

  handleError(): void {
    alert("144 Character Limit Exceeded");
  }

  ngOnInit(): void {
    this.dragService.dragUpdate.subscribe((drag) => {
      this.taskEditing = drag.taskEdit;
    });
  }

  disableAllDrag(): void {
    // Disable all dragging and set taskEditing to be true
    this.dragService.currentEditTasks++;
    this.dragService.enableTaskEdit();
  }

  enablePhaseDrag(): void {
    // Enable phase drag, disable taskdrag, and set taskEditing to be false
    this.dragService.currentEditTasks--;
    if ( this.dragService.currentEditTasks === 0 ) {
      this.dragService.disableTaskEdit();
    }
  }
}