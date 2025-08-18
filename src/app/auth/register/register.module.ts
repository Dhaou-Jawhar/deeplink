import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { LoginPreviewModule } from '../../modules/login-preview/login-preview.module';
import { PseudoComponent } from './pseudo/pseudo.component';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    LoginPreviewModule,
    PseudoComponent
  ]
})
export class RegisterModule { } 