import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AppLayoutComponent } from './layout/app.layout.component';
import { AppTopbarComponent } from './layout/topbar/app-topbar.component';
import { AppSidebarComponent } from './layout/sidebar/app-sidebar.component';
import { AppFooterComponent } from './layout/footer/app-footer.component';

// PrimeNG modules
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { MenuModule } from 'primeng/menu';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    AppLayoutComponent,
    AppTopbarComponent,
    AppSidebarComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    RippleModule,
    TooltipModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
