import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';
import { PseudoComponent } from './pseudo/pseudo.component';
import { DomaineComponent } from './domaine/domaine.component';

const routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'pseudo', component: PseudoComponent },
  { path: 'domaine', component: DomaineComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { } 