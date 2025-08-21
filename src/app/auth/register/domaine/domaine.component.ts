import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Router, ActivatedRoute } from '@angular/router';

interface SurveyOption {
  id: string;
  icon: string;
  label: string;
  selected: boolean;
}

@Component({
  selector: 'app-domaine',
  standalone: true,
  imports: [CommonModule, ButtonModule, CardModule],
  templateUrl: './domaine.component.html',
  styleUrl: './domaine.component.css'
})
export class DomaineComponent {
  title = 'Comment nous avez-vous connu ?';

  constructor(private router: Router, private route: ActivatedRoute) {}

  surveyOptions: SurveyOption[] = [
    { id: 'friends-school', icon: 'assets/image/icons/548_8532.svg', label: 'Amis ou École', selected: true },
    { id: 'newsletter-blog', icon: 'assets/image/icons/548_8540.svg', label: 'Newsletter ou Blog', selected: false },
    { id: 'tiktok', icon: 'assets/image/icons/548_8628.svg', label: 'TikTok', selected: false },
    { id: 'work', icon: 'assets/image/icons/548_8634.svg', label: 'Du travail', selected: false },
    { id: 'google', icon: 'assets/image/icons/548_8567.svg', label: 'Google', selected: false },
    { id: 'youtube', icon: 'assets/image/icons/548_8573.svg', label: 'YouTube', selected: false },
    { id: 'x', icon: 'assets/image/icons/548_8647.svg', label: 'X', selected: false },
    { id: 'linkedin', icon: 'assets/image/icons/548_8652.svg', label: 'LinkedIn', selected: false },
    { id: 'facebook', icon: 'assets/image/icons/548_8596.svg', label: 'Facebook', selected: false },
    { id: 'instagram', icon: 'assets/image/icons/548_8602.svg', label: 'Instagram', selected: false },
    { id: 'dont-remember', icon: 'assets/image/icons/548_8661.svg', label: 'Je ne me souviens pas', selected: false },
    { id: 'other', icon: 'assets/image/icons/548_8669.svg', label: 'Autre', selected: false }
  ];

  currentStep = 2;
  totalSteps = 3;

  selectOption(optionId: string): void {
    this.surveyOptions = this.surveyOptions.map(option => ({
      ...option,
      selected: option.id === optionId
    }));
  }

  onSkip(): void {
    console.log('Skip button clicked');
    // Navigate to function step even when skipping
    this.router.navigateByUrl('/auth/register/function');
  }

  onNext(): void {
    const selectedOption = this.surveyOptions.find(option => option.selected);
    console.log('Next button clicked', selectedOption);
    // Navigate to the function step
    this.router.navigateByUrl('/auth/register/function');
  }

  getDots(): number[] {
    return Array.from({ length: this.totalSteps }, (_, i) => i + 1);
  }

  isDotActive(step: number): boolean {
    return step === this.currentStep;
  }
}
