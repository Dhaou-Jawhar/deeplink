import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';

const routes: Routes = [
  { path: '', component: RegisterComponent },
  { 
    path: 'pseudo', 
    loadComponent: () => import('./pseudo/pseudo.component').then(m => m.PseudoComponent)
  },
  { 
    path: 'domaine', 
    loadComponent: () => import('./domaine/domaine.component').then(m => m.DomaineComponent)
  },
  { 
    path: 'function', 
    loadComponent: () => import('./function/function.component').then(m => m.FunctionComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { } 