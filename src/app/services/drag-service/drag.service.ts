import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class DragService {
  constructor() { }

  private phaseDrag = new Subject<boolean>();
  private taskDrag = new Subject<boolean>();
  private taskEditing = new Subject<boolean>();

  phaseDrag$ = this.phaseDrag.asObservable();
  taskDrag$ = this.taskDrag.asObservable();
  taskEditing$ = this.taskEditing.asObservable();
}
