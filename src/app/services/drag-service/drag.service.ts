import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class DragService {
  public dragUpdate: EventEmitter<any> = new EventEmitter();
  public taskEdit: boolean = false;
  public phaseDrag: boolean = true;
  public taskDrag: boolean = false;

  constructor() { }

  enableTaskEdit(): void {
    this.taskEdit = true;
    this.phaseDrag = false;
    this.taskDrag = false;

    let dragEmission = {
      taskEdit: this.taskEdit,
      phaseDrag: this.phaseDrag,
      taskDrag: this.taskDrag
    };

    this.dragUpdate.emit(dragEmission)
  }

  disableTaskEdit(): void {
    this.taskEdit = false;
    this.phaseDrag = true;
    this.taskDrag = false;

    let dragEmission = {
      taskEdit: this.taskEdit,
      phaseDrag: this.phaseDrag,
      taskDrag: this.taskDrag
    };

    this.dragUpdate.emit(dragEmission)
  }

  enablePhaseDrag(): void {
    this.phaseDrag = true;
    this.taskDrag = false;

    let dragEmission = {
      phaseDrag: this.phaseDrag,
      taskDrag: this.taskDrag
    };

    this.dragUpdate.emit(dragEmission);
  }

  enableTaskDrag(): void {
    this.phaseDrag = false;
    this.taskDrag = true;

    let dragEmission = {
      phaseDrag: this.phaseDrag,
      taskDrag: this.taskDrag
    };

    this.dragUpdate.emit(dragEmission);
  }
}
