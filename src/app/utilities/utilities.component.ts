import { Component } from '@angular/core';

@Component({
  selector: 'app-utilities',
  template: `
    <div class="utilities-container">
      <div class="utilities-header">
        <h1>System Utilities</h1>
        <p>Access various system tools and utilities</p>
      </div>

      <div class="utilities-grid">
        <div class="utility-card">
          <div class="utility-icon">🔧</div>
          <h3>System Settings</h3>
          <p>Configure system-wide settings and preferences</p>
          <button class="btn btn-primary">Open Settings</button>
        </div>

        <div class="utility-card">
          <div class="utility-icon">📄</div>
          <h3>Logs Viewer</h3>
          <p>View and analyze application logs</p>
          <button class="btn btn-primary">View Logs</button>
        </div>

        <div class="utility-card">
          <div class="utility-icon">💾</div>
          <h3>Backup Manager</h3>
          <p>Manage system backups and restoration</p>
          <button class="btn btn-primary">Manage Backups</button>
        </div>

        <div class="utility-card">
          <div class="utility-icon">📊</div>
          <h3>Performance Monitor</h3>
          <p>Monitor system performance and resources</p>
          <button class="btn btn-primary">View Performance</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .utilities-container {
      padding: 2rem 0;
    }
    .utilities-header {
      margin-bottom: 3rem;
    }
    .utilities-header h1 {
      font-size: 2.5rem;
      color: #495057;
      margin: 0 0 0.5rem 0;
    }
    .utilities-header p {
      color: #6c757d;
      font-size: 1.1rem;
      margin: 0;
    }
    .utilities-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
    .utility-card {
      background: white;
      border-radius: 0.75rem;
      padding: 2rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s ease;
      border: 1px solid #e9ecef;
    }
    .utility-card:hover {
      transform: translateY(-4px);
    }
    .utility-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    .utility-card h3 {
      color: #495057;
      margin: 0 0 1rem 0;
    }
    .utility-card p {
      color: #6c757d;
      margin: 0 0 1.5rem 0;
    }
    .btn {
      padding: 0.75rem 1.5rem;
      background: #0d6efd;
      color: white;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: background 0.2s;
    }
    .btn:hover {
      background: #0b5ed7;
    }
  `]
})
export class UtilitiesComponent { } 