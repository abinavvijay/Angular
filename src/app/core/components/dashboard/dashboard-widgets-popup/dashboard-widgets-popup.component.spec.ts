import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWidgetsPopupComponent } from './dashboard-widgets-popup.component';

describe('DashboardWidgetsPopupComponent', () => {
  let component: DashboardWidgetsPopupComponent;
  let fixture: ComponentFixture<DashboardWidgetsPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardWidgetsPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardWidgetsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
