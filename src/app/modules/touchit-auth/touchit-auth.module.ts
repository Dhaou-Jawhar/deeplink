import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TouchitAuthRoutingModule } from './touchit-auth-routing.module';
import { TouchitLoginComponent } from './touchit-login/touchit-login.component';


@NgModule({
  declarations: [
    TouchitLoginComponent
  ],
  imports: [
    CommonModule,
    TouchitAuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class TouchitAuthModule { }
