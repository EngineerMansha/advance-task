import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudenExamComponent } from './components/studen-exam/studen-exam.component';
import { StudentlistComponent } from './components/studentlist/studentlist.component';
import { StudentAppComponent } from './student-app.component';

const routes: Routes = [
  {
    path: 'student/:id',
    component: StudentAppComponent,
    children: [
      {
        path: 'studentlist',
        component: StudentlistComponent,
      },
      {
        path: 'studentExam',
        component: StudenExamComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
