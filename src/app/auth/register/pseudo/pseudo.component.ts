import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pseudo',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './pseudo.component.html',
  styleUrl: './pseudo.component.css'
})
export class PseudoComponent {
  pseudo: string = '';
  isSubmitting: boolean = false;

  constructor(private router: Router) {}

  onSubmit(): void {
    if (this.pseudo.trim().length < 2) {
      return;
    }

    this.isSubmitting = true;

    // Simulate API call delay
    setTimeout(() => {
      // Store pseudo in localStorage or service for later use
      localStorage.setItem('userPseudo', this.pseudo);
      
      // Navigate to next step or home
      this.router.navigate(['/home']);
      
      this.isSubmitting = false;
    }, 1000);
  }
}
