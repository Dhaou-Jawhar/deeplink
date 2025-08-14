import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface UserCard {
  id: number;
  name: string;
  description?: string;
  image?: string;
  backgroundColor?: string;
  socialIcons?: string[];
  musicInfo?: {
    title: string;
    artist: string;
  };
}

@Component({
  selector: 'app-touchit-login',
  templateUrl: './touchit-login.component.html',
  styleUrls: ['./touchit-login.component.css']
})
export class TouchitLoginComponent implements OnInit {
  loginForm!: FormGroup;
  userCards: UserCard[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
    this.loadMockData();
  }

  private initializeForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  private loadMockData() {
    this.userCards = [
      {
        id: 1,
        name: 'Pitch Addict',
        description: 'Music Producer',
        backgroundColor: '#FF6B6B',
        socialIcons: ['spotify', 'instagram'],
        musicInfo: {
          title: 'Beat Drop',
          artist: 'Pitch Addict'
        }
      },
      {
        id: 2,
        name: 'Camila Cabello',
        description: 'Singer & Songwriter',
        backgroundColor: '#4ECDC4',
        socialIcons: ['spotify', 'youtube', 'instagram'],
        musicInfo: {
          title: 'Havana',
          artist: 'Camila Cabello'
        }
      },
      {
        id: 3,
        name: 'mrbeast',
        description: 'Content Creator',
        backgroundColor: '#45B7D1',
        socialIcons: ['youtube', 'twitter', 'instagram']
      },
      {
        id: 4,
        name: 'Emma Stone',
        description: 'Actress',
        backgroundColor: '#96CEB4',
        socialIcons: ['instagram', 'twitter']
      },
      {
        id: 5,
        name: 'DJ Shadow',
        description: 'Electronic Music Artist',
        backgroundColor: '#FFEAA7',
        socialIcons: ['spotify', 'soundcloud'],
        musicInfo: {
          title: 'Midnight in a Perfect World',
          artist: 'DJ Shadow'
        }
      },
      {
        id: 6,
        name: 'Tech Insider',
        description: 'Technology Reviews',
        backgroundColor: '#DDA0DD',
        socialIcons: ['youtube', 'twitter']
      }
    ];
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Login attempt:', this.loginForm.value);
      // TODO: Implement actual login logic
    } else {
      console.log('Form is invalid');
      this.markFormGroupTouched();
    }
  }

  onGoogleLogin() {
    console.log('Google login clicked');
    // TODO: Implement Google OAuth
  }

  onAppleLogin() {
    console.log('Apple login clicked');
    // TODO: Implement Apple Sign In
  }

  onForgotPassword() {
    console.log('Forgot password clicked');
    // TODO: Implement forgot password flow
  }

  onCreateAccount() {
    console.log('Create account clicked');
    // TODO: Navigate to registration
  }

  private markFormGroupTouched() {
    Object.keys(this.loginForm.controls).forEach(key => {
      const control = this.loginForm.get(key);
      control?.markAsTouched();
    });
  }
}
