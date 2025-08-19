import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Router } from '@angular/router';

interface DomainOption {
  id: string;
  label: string;
  icon: string;
  iconClass?: string;
}

@Component({
  selector: 'app-domaine',
  standalone: true,
  imports: [CommonModule, ButtonModule, CardModule],
  templateUrl: './domaine.component.html',
  styleUrl: './domaine.component.css'
})
export class DomaineComponent {
  selectedDomain: string | null = null;

  domainOptions: DomainOption[] = [
    { id: 'amis', label: 'Amis ou École', icon: 'pi-graduation-cap', iconClass: 'text-purple-500' },
    { id: 'newsletter', label: 'Newsletter ou Blog', icon: 'pi-pencil', iconClass: 'text-gray-700' },
    { id: 'tiktok', label: 'TikTok', icon: 'pi-video', iconClass: 'text-black' },
    { id: 'travail', label: 'Du travail', icon: 'pi-briefcase', iconClass: 'text-gray-700' },
    { id: 'google', label: 'Google', icon: 'pi-google', iconClass: 'text-blue-500' },
    { id: 'youtube', label: 'YouTube', icon: 'pi-youtube', iconClass: 'text-red-500' },
    { id: 'x', label: 'X', icon: 'pi-twitter', iconClass: 'text-black' },
    { id: 'linkedin', label: 'LinkedIn', icon: 'pi-linkedin', iconClass: 'text-blue-600' },
    { id: 'facebook', label: 'Facebook', icon: 'pi-facebook', iconClass: 'text-blue-600' },
    { id: 'instagram', label: 'Instagram', icon: 'pi-instagram', iconClass: 'text-pink-500' },
    { id: 'souviens', label: 'Je ne me souviens pas', icon: 'pi-question', iconClass: 'text-gray-500' },
    { id: 'autre', label: 'Autre', icon: 'pi-ellipsis-h', iconClass: 'text-gray-500' }
  ];

  constructor(private router: Router) {}

  selectDomain(domainId: string) {
    this.selectedDomain = domainId;
  }

  skip() {
    // Navigate to next step or home
    console.log('Skip clicked');
  }

  continue() {
    if (this.selectedDomain) {
      console.log('Selected domain:', this.selectedDomain);
      // Navigate to next step
    }
  }
}
