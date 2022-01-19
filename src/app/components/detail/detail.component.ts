import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task/task.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  id: number;

  task: Task;

  constructor(private route: ActivatedRoute, private taskService: TaskService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.taskService.getTask(this.id).subscribe((task: Task) => {
      this.task = task;
    });
  }
}
