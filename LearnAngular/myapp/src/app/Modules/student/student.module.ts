import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentlistComponent } from './components/studentlist/studentlist.component';
import { StudenExamComponent } from './components/studen-exam/studen-exam.component';
import { StudentAppComponent } from './student-app.component';


@NgModule({
  declarations: [StudentlistComponent, StudenExamComponent, StudentAppComponent],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
