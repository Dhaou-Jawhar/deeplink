import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchitLoginComponent } from './touchit-login.component';

describe('TouchitLoginComponent', () => {
  let component: TouchitLoginComponent;
  let fixture: ComponentFixture<TouchitLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TouchitLoginComponent]
    });
    fixture = TestBed.createComponent(TouchitLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
