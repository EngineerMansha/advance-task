import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserlistComponent } from './components/userlist/userlist.component';
import { UserAboutComponent } from './components/user-about/user-about.component';
import { UserAppComponent } from './user-app.component';

@NgModule({
  declarations: [UserlistComponent, UserAboutComponent, UserAppComponent],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
