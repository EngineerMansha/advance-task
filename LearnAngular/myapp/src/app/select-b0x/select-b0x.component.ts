import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-select-b0x',
  templateUrl: './select-b0x.component.html',
  styleUrls: ['./select-b0x.component.css'],
})
export class SelectB0xComponent implements OnInit {
  @Input() data: [];
  @Input() selectedOption: string;
  @Output() optionSelected = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    console.log(this.selectedOption);
  }
  onOptionChange() {
    console.log(this.selectedOption);
    this.optionSelected.emit(this.selectedOption);
  }
}
