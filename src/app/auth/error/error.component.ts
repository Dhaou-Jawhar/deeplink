import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
    <div class="error-container">
      <div class="error-content">
        <h1>Authentication Error</h1>
        <p>There was an error during authentication. Please try again.</p>
        <button class="btn btn-primary" routerLink="/auth/login">Return to Login</button>
      </div>
    </div>
  `,
  styles: [`
    .error-container {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f8f9fa;
    }
    .error-content {
      text-align: center;
      padding: 2rem;
      background: white;
      border-radius: 0.5rem;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    .btn {
      padding: 0.75rem 1.5rem;
      background: #0d6efd;
      color: white;
      border: none;
      border-radius: 0.375rem;
      text-decoration: none;
      display: inline-block;
      margin-top: 1rem;
    }
  `]
})
export class ErrorComponent { } 