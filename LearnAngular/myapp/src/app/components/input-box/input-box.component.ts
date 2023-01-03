import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

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
  placeHolder = 'Me ho place Holder';
  constructor() {}

  ngOnInit(): void {
    console.log(this.data);
    console.log('label', this.label);
  }
}
