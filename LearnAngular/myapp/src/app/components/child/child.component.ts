import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  // @Input() data: string;
  @Output() sendData = new EventEmitter<any>();
  sendingData = 'this data is send for testing';
  placeHolderName = 'child place holder';
  childInput = 'Child Input Box';
  childForm: FormGroup;
  constructor(private fb: FormBuilder) {}
  sendDataF() {
    this.sendData.emit(this.sendingData);
  }
  ngOnInit(): void {
    // console.log(this.data);
    this.childForm = this.fb.group({
      name: ['', Validators.required],
    });
  }
  sendTest() {
    console.log('childInput', this.childForm.value);
  }
}
