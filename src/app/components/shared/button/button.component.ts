import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() text: string = 'Add Task';

  @Input() color: string = 'green';

  @Output('onClick') onClick$ = new EventEmitter();

  constructor() { }

  onClick(): void {
    this.onClick$.emit();
  }
}
