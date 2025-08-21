import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: '/auth/login', pathMatch: 'full' },

            // Public authentication routes (no layout wrapper)
            { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },

            // Protected routes with layout wrapper
            {
                path: '', 
                component: AppLayoutComponent,
                children: [
                    { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
                    { path: 'stats', loadComponent: () => import('./pages/stats/stats.component').then(m => m.StatsComponent) },
                    { path: 'stalking', loadComponent: () => import('./pages/stalking/stalking.component').then(m => m.StalkingComponent) },
                    { path: 'deeplinks', loadComponent: () => import('./pages/deeplinks/deeplinks.component').then(m => m.DeeplinksComponent) },
                    { path: 'bio', loadComponent: () => import('./pages/bio/bio.component').then(m => m.BioComponent) },
                    { path: 'qrcodes', loadComponent: () => import('./pages/qrcodes/qrcodes.component').then(m => m.QrcodesComponent) },
                ]
            },

            // Standalone routes
            { path: 'landing', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) },
            
            // Error handling
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { 
            scrollPositionRestoration: 'enabled', 
            anchorScrolling: 'enabled', 
            onSameUrlNavigation: 'reload' 
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
