import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorAdvanceDashboardComponent } from './author-advance-dashboard.component';

describe('AuthorAdvanceDashboardComponent', () => {
  let component: AuthorAdvanceDashboardComponent;
  let fixture: ComponentFixture<AuthorAdvanceDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorAdvanceDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorAdvanceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
