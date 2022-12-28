import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() data: string;
  @Output() sendData = new EventEmitter<any>();
  sendingData = 'this data is send for testing';
  constructor() {}
  sendDataF() {
    this.sendData.emit(this.sendingData);
  }
  ngOnInit(): void {
    console.log(this.data);
  }
}
