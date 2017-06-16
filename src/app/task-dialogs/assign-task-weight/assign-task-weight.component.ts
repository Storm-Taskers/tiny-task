import { Component, Inject } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-assign-task-weight',
  templateUrl: './assign-task-weight.component.html',
  styleUrls: ['./assign-task-weight.component.css']
})
export class AssignTaskWeightComponent {

  constructor(private dialogRef: MdDialogRef<AssignTaskWeightComponent>) { }

}
