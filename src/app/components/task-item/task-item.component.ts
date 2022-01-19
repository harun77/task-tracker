import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {

  @Input() task: Task;

  @Input() isLast: boolean;

  @Input() showActions: boolean = false;

  @Output('onDelete') onDelete$ = new EventEmitter();

  @Output('onToggle') onToggle$ = new EventEmitter();

  get isReminder(): boolean {
    return this.task.reminder;
  }

  constructor() { }

  onDelete(event: any): void {
    this.stopEvent(event);
    this.onDelete$.emit();
  }

  onToggle(event: any): void {
    this.stopEvent(event);
    this.onToggle$.emit();
  }

  stopEvent(event: any): void {
    event.preventDefault();
    event.stopPropagation();
  }
}
