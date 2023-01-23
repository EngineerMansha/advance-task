import { Component, OnInit } from '@angular/core';
import { SubjectTestService } from 'src/app/subject-test.service';

@Component({
  selector: 'app-subject-test',
  templateUrl: './subject-test.component.html',
  styleUrls: ['./subject-test.component.css']
})
export class SubjectTestComponent implements OnInit {
  userName = "Mansha";
  constructor(private _subject:SubjectTestService) { }

  ngOnInit(): void {
    
  }

}
