import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TouchitLoginComponent } from './touchit-login/touchit-login.component';

const routes: Routes = [
  { 
    path: '', 
    component: TouchitLoginComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TouchitAuthRoutingModule { }
