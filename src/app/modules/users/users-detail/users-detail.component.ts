import { Component } from '@angular/core';

@Component({
  selector: 'app-users-detail',
  template: `
    <div class="users-detail-container">
      <div class="detail-header">
        <h1>User Details</h1>
        <div class="header-actions">
          <button class="btn btn-warning" routerLink="/back-office/users/edit/1">Edit User</button>
          <button class="btn btn-secondary" routerLink="/back-office/users">Back to List</button>
        </div>
      </div>
      
      <div class="detail-container">
        <div class="user-info">
          <div class="info-group">
            <label>ID:</label>
            <span>1</span>
          </div>
          
          <div class="info-group">
            <label>Full Name:</label>
            <span>John Doe</span>
          </div>
          
          <div class="info-group">
            <label>Email:</label>
            <span>john@example.com</span>
          </div>
          
          <div class="info-group">
            <label>Role:</label>
            <span class="role-badge role-admin">Admin</span>
          </div>
          
          <div class="info-group">
            <label>Status:</label>
            <span class="status-badge status-active">Active</span>
          </div>
          
          <div class="info-group">
            <label>Created:</label>
            <span>2024-01-15</span>
          </div>
          
          <div class="info-group">
            <label>Last Login:</label>
            <span>2024-01-20 10:30 AM</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .users-detail-container { padding: 2rem 0; }
    .detail-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
    .detail-header h1 { font-size: 2.5rem; color: #495057; margin: 0; }
    .header-actions { display: flex; gap: 1rem; }
    .detail-container { background: white; padding: 2rem; border-radius: 0.75rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
    .info-group { display: flex; margin-bottom: 1.5rem; }
    .info-group label { font-weight: 600; color: #495057; min-width: 120px; }
    .info-group span { color: #6c757d; }
    .role-badge, .status-badge { padding: 0.375rem 0.75rem; border-radius: 0.375rem; font-size: 0.875rem; font-weight: 500; }
    .role-admin { background-color: #ffeaa7; color: #6c5ce7; }
    .status-active { background-color: #d1ecf1; color: #0c5460; }
    .btn { padding: 0.75rem 1.5rem; border: none; border-radius: 0.5rem; cursor: pointer; text-decoration: none; }
    .btn-primary { background: #0d6efd; color: white; }
    .btn-warning { background: #ffc107; color: #212529; }
    .btn-secondary { background: #6c757d; color: white; }
  `]
})
export class UsersDetailComponent { } 