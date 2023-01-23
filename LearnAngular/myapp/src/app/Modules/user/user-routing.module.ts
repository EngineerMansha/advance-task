import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAboutComponent } from './components/user-about/user-about.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { UserAppComponent } from './user-app.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserAppComponent,
    children: [
      {
        path: 'userList',
        component: UserlistComponent,
      },
      {
        path: 'about',
        component: UserAboutComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
