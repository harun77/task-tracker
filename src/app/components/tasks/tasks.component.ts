import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { EventBusService } from 'src/app/services/event-bus/event-bus.service';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks: Task[];

  constructor(private taskService: TaskService, private eventBus: EventBusService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });

    this.eventBus.addNewTask$.subscribe((newTask: any) => {
      if (newTask) {
        this.tasks.push(newTask);
      }
    });
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task.id).subscribe((_res: any) => {
      this.tasks = this.tasks.filter((e: any) => e.id !== task.id);
    });
  }

  toggleReminder(task: Task): void {
    this.taskService.toggleTaskReminder(task).subscribe();
  }

}
