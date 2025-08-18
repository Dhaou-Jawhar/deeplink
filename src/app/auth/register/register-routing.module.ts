import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';
import { PseudoComponent } from './pseudo/pseudo.component';

const routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'pseudo', component: PseudoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { } 