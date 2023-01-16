import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css'],
})
export class InputBoxComponent implements OnInit {
  @Input() data: any;
  @Input() label: any;
  @Input() control: any;
  @Input() form: any;
  @Output() changeInput = new EventEmitter<any>();
  placeHolder = 'Me ho place Holder';
  constructor() {}

  ngOnInit(): void {
    console.log(this.data);
    console.log('label', this.label);
  }
  sendInput(e) {
    this.changeInput.emit(e.target.value);
  }
}
