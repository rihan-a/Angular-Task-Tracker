import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title: string = 'angular-task-tracker';

  toggleAddTask() {
    console.log('toggle task');
  }

  toggleRemoveTask() {
    console.log('remove task');
  }
}
