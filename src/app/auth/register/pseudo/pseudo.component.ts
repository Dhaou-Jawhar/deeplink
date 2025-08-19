import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pseudo',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './pseudo.component.html',
  styleUrl: './pseudo.component.css'
})
export class PseudoComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.signupForm = this.fb.group({
      pseudo: ['', [Validators.required, Validators.minLength(2)]],
      subscribe: [false]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.signupForm.valid) {
      const formData = this.signupForm.value;
      console.log('Form submitted:', formData);

      // Here you would typically send the data to your service
      // this.userService.signup(formData).subscribe(...);

      // For now, just show an alert and navigate to next step
      console.log(`Bonjour ${formData.pseudo}! Form submitted successfully.`);
      
      // Navigate to the next step in registration (domaine)
      this.router.navigate(['/auth/register/domaine']);
    } else {
      // Mark all fields as touched to show validation errors
      this.signupForm.markAllAsTouched();
    }
  }

  // Getter for easy access to form controls in template
  get f() {
    return this.signupForm.controls;
  }
}
