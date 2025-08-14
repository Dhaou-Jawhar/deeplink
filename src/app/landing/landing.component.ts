import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  template: `
    <div class="landing-container">
      <div class="hero-section">
        <h1>Welcome to TOUCH-IT</h1>
        <p>Powerful business management platform</p>
        <div class="cta-buttons">
          <button class="btn btn-primary" routerLink="/auth/login">Sign In</button>
          <button class="btn btn-outline" routerLink="/auth/register">Get Started</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .landing-container {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      text-align: center;
    }
    .hero-section h1 {
      font-size: 4rem;
      margin: 0 0 1rem 0;
    }
    .hero-section p {
      font-size: 1.5rem;
      margin: 0 0 2rem 0;
    }
    .cta-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
    }
    .btn {
      padding: 1rem 2rem;
      border: 2px solid white;
      border-radius: 0.5rem;
      font-size: 1.1rem;
      cursor: pointer;
      transition: all 0.2s;
      text-decoration: none;
      display: inline-block;
    }
    .btn-primary {
      background: white;
      color: #667eea;
    }
    .btn-outline {
      background: transparent;
      color: white;
    }
    .btn:hover {
      transform: translateY(-2px);
    }
  `]
})
export class LandingComponent { } 