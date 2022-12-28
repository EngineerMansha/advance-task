import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  mydata = 'my name is muhammad mansha';
  constructor() {}

  ngOnInit(): void {}
  recData(e) {
    console.log('recData', e);
  }
}
