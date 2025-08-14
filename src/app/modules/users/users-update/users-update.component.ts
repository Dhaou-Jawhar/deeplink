import { Component } from '@angular/core';

@Component({
  selector: 'app-users-update',
  template: `
    <div class="users-update-container">
      <div class="form-header">
        <h1>Edit User</h1>
        <button class="btn btn-secondary" routerLink="/back-office/users">Back to List</button>
      </div>
      
      <div class="form-container">
        <form class="user-form">
          <div class="form-group">
            <label for="name">Full Name</label>
            <input type="text" id="name" name="name" value="John Doe" required>
          </div>
          
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" value="john@example.com" required>
          </div>
          
          <div class="form-group">
            <label for="role">Role</label>
            <select id="role" name="role" required>
              <option value="Admin" selected>Admin</option>
              <option value="User">User</option>
            </select>
          </div>
          
          <div class="form-group">
            <label for="status">Status</label>
            <select id="status" name="status" required>
              <option value="Active" selected>Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          
          <div class="form-actions">
            <button type="submit" class="btn btn-primary">Update User</button>
            <button type="button" class="btn btn-secondary" routerLink="/back-office/users">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .users-update-container { padding: 2rem 0; }
    .form-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
    .form-header h1 { font-size: 2.5rem; color: #495057; margin: 0; }
    .form-container { background: white; padding: 2rem; border-radius: 0.75rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
    .form-group { margin-bottom: 1.5rem; }
    .form-group label { display: block; margin-bottom: 0.5rem; color: #495057; font-weight: 500; }
    .form-group input, .form-group select { width: 100%; padding: 0.75rem; border: 2px solid #e9ecef; border-radius: 0.5rem; box-sizing: border-box; }
    .form-actions { display: flex; gap: 1rem; margin-top: 2rem; }
    .btn { padding: 0.75rem 1.5rem; border: none; border-radius: 0.5rem; cursor: pointer; text-decoration: none; }
    .btn-primary { background: #0d6efd; color: white; }
    .btn-secondary { background: #6c757d; color: white; }
  `]
})
export class UsersUpdateComponent { } 