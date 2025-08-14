import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './app.layout.component.html',
  styleUrls: ['./app.layout.component.scss']
})
export class AppLayoutComponent implements OnInit, OnDestroy {
  collapsed = false;
  mobileSidebarActive = false;
  private readonly storageKey = 'sidebarCollapsed';
  private routerSub?: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.collapsed = localStorage.getItem(this.storageKey) === '1';
    this.routerSub = this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd && this.isMobile()) {
        this.mobileSidebarActive = false;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.routerSub) {
      this.routerSub.unsubscribe();
    }
  }

  onToggle(): void {
    // If mobile, toggle overlay; otherwise toggle collapsed state
    if (this.isMobile()) {
      this.mobileSidebarActive = !this.mobileSidebarActive;
      return;
    }
    this.collapsed = !this.collapsed;
    localStorage.setItem(this.storageKey, this.collapsed ? '1' : '0');
  }

  onNavigateFromSidebar(): void {
    if (this.isMobile()) {
      this.mobileSidebarActive = false;
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    // Close overlay if resizing to desktop
    if (!this.isMobile()) {
      this.mobileSidebarActive = false;
    }
  }

  isMobile(): boolean {
    return window.innerWidth < 1024;
  }
}