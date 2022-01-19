import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EventBusService } from 'src/app/services/event-bus/event-bus.service';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {

  title: string = "Add Task";

  text: string;

  date: string;

  reminder: boolean;

  constructor(public dialogRef: MatDialogRef<AddTaskComponent>, private taskService: TaskService, private eventBus: EventBusService) { }

  create(): void {
    if (!this.text) {
      alert('Task text is empty!');
      return;
    }
    this.dialogRef.close();
    const newTask = {
      text: this.text,
      date: this.date,
      reminder: this.reminder
    }
    this.taskService.createTask(newTask).subscribe((task: Task) => {
      this.eventBus.emitNewTask(task);
    });
  }
}
