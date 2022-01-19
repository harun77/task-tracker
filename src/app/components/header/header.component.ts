import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from '../dialogs/add-task/add-task.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  title: string = "Task Tracker";

  constructor(public dialog: MatDialog) { }

  openAddDialog(): void {
    this.dialog.open(AddTaskComponent, {
      width: '500px'
    });
  }
}
