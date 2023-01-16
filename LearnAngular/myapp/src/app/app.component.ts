import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myapp';
  box1: any;
  users = [
    {
      id: 1,
      name: 'mansha',
      dept: 'software',
    },
    {
      id: 2,
      name: 'usman',
      dept: 'software',
    },
    {
      id: 3,
      name: 'ali',
      dept: 'software',
    },
    {
      id: 4,
      name: 'Hamza',
      dept: 'software',
    },
  ];
  constructor() {
    console.log(this.box1);
  }
  onOption1Selected(e) {
    debugger;
  }
}
