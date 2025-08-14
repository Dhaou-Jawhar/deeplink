import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

interface SidebarItem {
  label: string;
  path: string;
  icon?: string;
  svg?: 'stalking';
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.scss']
})
export class AppSidebarComponent implements OnInit {
  @Input() collapsed = false;
  @Input() mobileActive = false;
  @Output() navigate = new EventEmitter<void>();
  // Change to 'arrows' for up/down icon, 'dots' for three-dot icon
  menuIcon: 'arrows' | 'dots' = 'dots';

  sidebarItems: SidebarItem[] = [
    { label: 'Accueil', icon: 'pi pi-home', path: '/home' },
    { label: 'Statistiques', icon: 'pi pi-clock', path: '/stats' },
    { label: 'Stalking', svg: 'stalking', path: '/stalking' },
    { label: 'Lien directs', icon: 'pi pi-link', path: '/deeplinks' },
    { label: 'Link in bio', icon: 'pi pi-external-link', path: '/bio' },
    { label: 'QR Codes', icon: 'pi pi-qrcode', path: '/qrcodes' },
  ];

  profileMenuItems: MenuItem[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.profileMenuItems = [
      { label: 'Mettre à niveau' },
      { label: 'Mon compte' },
      { label: 'Paramètres' },
      { separator: true },
      { label: 'Se déconnecter', styleClass: 'danger', command: () => this.logout() }
    ];
  }

  onItemClick(): void {
    this.navigate.emit();
  }

  private logout(): void {
    // If you store auth tokens, clear them here
    // localStorage.removeItem('token');
    this.router.navigateByUrl('/auth/login');
  }
}


