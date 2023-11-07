import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './components/login/login.component';
import { InfoComponent } from './components/info/info.component';

@NgModule({
  declarations: [LoginComponent, InfoComponent],
  imports: [CommonModule, UserRoutingModule],
  exports: [LoginComponent],
})
export class UserModule {}
