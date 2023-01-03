import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  mydata = 'my name is muhammad mansha';
  pplaceHolder = 'parent Place holder';
  parentLabel = 'parent Input Box';
  constructor() {}

  ngOnInit(): void {}
  recData(e) {
    console.log('recData', e);
  }
  test(e) {
    console.log(e.target.value);
  }
}
