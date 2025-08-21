import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Router } from '@angular/router';

interface SurveyOption {
  id: string;
  icon: string;
  label: string;
  selected: boolean;
}

@Component({
  selector: 'app-function',
  standalone: true,
  imports: [CommonModule, ButtonModule, CardModule],
  templateUrl: './function.component.html',
  styleUrl: './function.component.css'
})
export class FunctionComponent {
  title = 'Pour quelle fonctionnalité êtes-vous ici ?';

  constructor(private router: Router) {}

  surveyOptions: SurveyOption[] = [
    { id: 'developer', icon: 'assets/image/icons/bio.svg', label: 'Link in bio', selected: true },
    { id: 'designer', icon: 'assets/image/icons/liens.svg', label: 'Liens directs', selected: false },
    { id: 'marketing', icon: 'assets/image/icons/stat.svg', label: 'Statistiques', selected: false },
    { id: 'manager', icon: 'assets/image/icons/stalk.svg', label: 'Stalking', selected: false },
    { id: 'entrepreneur', icon: 'assets/image/icons/qr.svg', label: 'QR code', selected: false },
    { id: 'student', icon: 'assets/image/icons/dots.svg', label: 'Je suis juste curieux 👀', selected: false },
    // { id: 'freelancer', icon: 'assets/image/icons/548_8647.svg', label: 'Freelancer', selected: false },
    // { id: 'consultant', icon: 'assets/image/icons/548_8652.svg', label: 'Consultant/e', selected: false },
    // { id: 'sales', icon: 'assets/image/icons/548_8596.svg', label: 'Commercial/e', selected: false },
    // { id: 'hr', icon: 'assets/image/icons/548_8602.svg', label: 'Ressources Humaines', selected: false },
    // { id: 'finance', icon: 'assets/image/icons/548_8661.svg', label: 'Finance', selected: false },
    // { id: 'other', icon: 'assets/image/icons/548_8669.svg', label: 'Autre', selected: false }
  ];

  currentStep = 3;
  totalSteps = 3;

  selectOption(optionId: string): void {
    this.surveyOptions = this.surveyOptions.map(option => ({
      ...option,
      selected: option.id === optionId
    }));
  }

  onSkip(): void {
    console.log('Skip button clicked');
    // Navigate to next step (could be dashboard or completion page)
    console.log('Registration flow completed - function step skipped');
  }

  onNext(): void {
    const selectedOption = this.surveyOptions.find(option => option.selected);
    console.log('Next button clicked', selectedOption);
    // Complete the registration flow
    console.log('Registration flow completed with function:', selectedOption?.label);
  }

  getDots(): number[] {
    return Array.from({ length: this.totalSteps }, (_, i) => i + 1);
  }

  isDotActive(step: number): boolean {
    return step === this.currentStep;
  }
}
