import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdentityRoutingModule } from './identity-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IdentityRoutingModule,
    LoginComponent,
    RegisterComponent
  ],
  exports: [LoginComponent, RegisterComponent]
})
export class IdentityModule { }
