# Business Module Template

This template provides a standardized approach for creating new business modules in the TOUCH-IT Angular application.

## Directory Structure

```
src/app/modules/[module-name]/
├── [module-name].module.ts              # Main module file
├── [module-name]-routing.module.ts      # Routing configuration
├── [module-name]-list/                  # List/Dashboard component
│   ├── [module-name]-list.component.ts
│   ├── [module-name]-list.component.html
│   └── [module-name]-list.component.css
├── [module-name]-add/                   # Add/Create component
│   ├── [module-name]-add.component.ts
│   ├── [module-name]-add.component.html
│   └── [module-name]-add.component.css
├── [module-name]-update/                # Edit/Update component
│   ├── [module-name]-update.component.ts
│   ├── [module-name]-update.component.html
│   └── [module-name]-update.component.css
└── [module-name]-detail/                # Detail/View component
    ├── [module-name]-detail.component.ts
    ├── [module-name]-detail.component.html
    └── [module-name]-detail.component.css
```

## Step-by-Step Implementation

### 1. Create the Main Module File

**File:** `src/app/modules/[module-name]/[module-name].module.ts`

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { [ModuleName]RoutingModule } from './[module-name]-routing.module';
import { [ModuleName]ListComponent } from './[module-name]-list/[module-name]-list.component';
import { [ModuleName]AddComponent } from './[module-name]-add/[module-name]-add.component';
import { [ModuleName]UpdateComponent } from './[module-name]-update/[module-name]-update.component';
import { [ModuleName]DetailComponent } from './[module-name]-detail/[module-name]-detail.component';

@NgModule({
  declarations: [
    [ModuleName]ListComponent,
    [ModuleName]AddComponent,
    [ModuleName]UpdateComponent,
    [ModuleName]DetailComponent
  ],
  imports: [
    CommonModule,
    [ModuleName]RoutingModule,
    // Add other imports (FormsModule, ReactiveFormsModule, etc.)
  ]
})
export class [ModuleName]Module { }
```

### 2. Create the Routing Module

**File:** `src/app/modules/[module-name]/[module-name]-routing.module.ts`

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { [ModuleName]ListComponent } from './[module-name]-list/[module-name]-list.component';
import { [ModuleName]AddComponent } from './[module-name]-add/[module-name]-add.component';
import { [ModuleName]UpdateComponent } from './[module-name]-update/[module-name]-update.component';
import { [ModuleName]DetailComponent } from './[module-name]-detail/[module-name]-detail.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '[module-name]Dashboard',
        pathMatch: 'full'
    },
    { path: '[module-name]Dashboard', component: [ModuleName]ListComponent },
    { path: 'list', component: [ModuleName]ListComponent },
    { path: 'add', component: [ModuleName]AddComponent },
    { path: 'edit/:id', component: [ModuleName]UpdateComponent },
    { path: 'detail/:id', component: [ModuleName]DetailComponent },
    { path: '**', redirectTo: '/notfound' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class [ModuleName]RoutingModule { }
```

### 3. Register the Module in Main App Routing

**File:** `src/app/app-routing.module.ts`

Add your module to the business modules section:

```typescript
// Business modules with organized prefix
{ path: 'back-office/[module-name]', loadChildren: () => import('./modules/[module-name]/[module-name].module').then(m => m.[ModuleName]Module) },
```

### 4. Add Navigation Link (Optional)

**File:** `src/app/layout/app.layout.component.html`

Add to the Back Office dropdown:

```html
<div class="dropdown-content">
  <a routerLink="/back-office/[module-name]" routerLinkActive="active">[Module Display Name]</a>
  <!-- Other modules -->
</div>
```

## Component Templates

### List Component Template

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-[module-name]-list',
  templateUrl: './[module-name]-list.component.html',
  styleUrls: ['./[module-name]-list.component.css']
})
export class [ModuleName]ListComponent {
  items: any[] = []; // Replace with your data model
  
  constructor() {
    // Load data
  }
  
  deleteItem(id: number): void {
    // Implement delete logic
  }
}
```

### Add Component Template

```typescript
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-[module-name]-add',
  templateUrl: './[module-name]-add.component.html',
  styleUrls: ['./[module-name]-add.component.css']
})
export class [ModuleName]AddComponent {
  item: any = {}; // Replace with your data model
  
  constructor(private router: Router) {}
  
  onSubmit(): void {
    // Implement save logic
    // this.router.navigate(['/back-office/[module-name]']);
  }
}
```

### Update Component Template

```typescript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-[module-name]-update',
  templateUrl: './[module-name]-update.component.html',
  styleUrls: ['./[module-name]-update.component.css']
})
export class [ModuleName]UpdateComponent implements OnInit {
  item: any = {}; // Replace with your data model
  id: number;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    // Load item data by id
  }
  
  onSubmit(): void {
    // Implement update logic
    // this.router.navigate(['/back-office/[module-name]']);
  }
}
```

### Detail Component Template

```typescript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-[module-name]-detail',
  templateUrl: './[module-name]-detail.component.html',
  styleUrls: ['./[module-name]-detail.component.css']
})
export class [ModuleName]DetailComponent implements OnInit {
  item: any = {}; // Replace with your data model
  id: number;
  
  constructor(private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    // Load item data by id
  }
}
```

## Naming Conventions

1. **Module Name**: Use kebab-case for folders and files (e.g., `user-profiles`)
2. **Class Names**: Use PascalCase (e.g., `UserProfilesModule`)
3. **Component Selectors**: Use kebab-case with app prefix (e.g., `app-user-profiles-list`)
4. **Route Paths**: Use kebab-case (e.g., `/back-office/user-profiles`)

## Standard Routes for Each Module

- `''` → Redirects to `[module-name]Dashboard`
- `[module-name]Dashboard` → Main dashboard/list view
- `list` → Alternative list view
- `add` → Create new item
- `edit/:id` → Edit existing item
- `detail/:id` → View item details

## CSS Class Naming

Use BEM methodology:
- `.module-name-container`
- `.module-name-header`
- `.module-name-table`
- `.module-name-form`

## Integration Checklist

- [ ] Create module directory structure
- [ ] Implement all four main components
- [ ] Add routing configuration
- [ ] Register in main app routing
- [ ] Add navigation link (if needed)
- [ ] Test all routes
- [ ] Implement data services
- [ ] Add form validation
- [ ] Style components consistently

## Example Usage

See the `users` module in `src/app/modules/users/` for a complete implementation example.

## Development Commands

```bash
# Generate new module (if using Angular CLI)
ng generate module modules/[module-name] --routing

# Generate components
ng generate component modules/[module-name]/[module-name]-list
ng generate component modules/[module-name]/[module-name]-add
ng generate component modules/[module-name]/[module-name]-update
ng generate component modules/[module-name]/[module-name]-detail
```

## Best Practices

1. **Consistent Structure**: Follow the template exactly for maintainability
2. **Lazy Loading**: All modules should be lazy-loaded for performance
3. **Error Handling**: Include proper error handling and loading states
4. **Responsive Design**: Ensure all components work on mobile devices
5. **Accessibility**: Include proper ARIA labels and keyboard navigation
6. **Testing**: Write unit tests for all components
7. **Documentation**: Document any custom functionality or business logic 