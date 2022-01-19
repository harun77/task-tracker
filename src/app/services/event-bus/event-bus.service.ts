import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {

  addNewTaskSubject = new Subject<Task>();

  addNewTask$ = this.addNewTaskSubject.asObservable();

  constructor() { }

  emitNewTask(task: Task): void {
    this.addNewTaskSubject.next(task);
  }
}
