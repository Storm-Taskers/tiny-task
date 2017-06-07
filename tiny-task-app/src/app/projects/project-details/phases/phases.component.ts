import { Component, OnInit, Input } from '@angular/core';

import { ProjectsService } from '../../../services/projects-service/projects.service';

import { Phase } from './Phase';
import { Task } from './tasks/Task';

@Component({
  selector: 'phases',
  templateUrl: './phases.component.html',
  styleUrls: ['./phases.component.css']
})

export class PhasesComponent implements OnInit {
  @Input() phase: Phase;
  phaseTasks: Task[];
  dragOperation: boolean = true;

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.projectsService.getTasks(this.phase.id).then((result: any) => {
      this.phaseTasks = result.task_info;
    });
  }

  editPhaseName(phaseId: number, newName: string): void {
    this.projectsService.editPhaseName(phaseId, newName);
  }

  deletePhase(phaseId: number): void {
    if (confirm('Are you sure you want to delete this phase?')) {
      this.projectsService.deletePhase(phaseId);
    }
  }

  addNewTask(phaseId: number): void {
    this.projectsService.createTask(phaseId)
      .then((task) => {
        this.phaseTasks.push(task);
      });
  }

  deleteTask(taskId: number): void {
    this.projectsService.deleteTask(taskId);
    this.phaseTasks.splice(this.phaseTasks.findIndex(task => task.id === taskId), 1);
  }
  
  handleError(): void {
    alert("50 Character Limit Exceeded");
  }
}
