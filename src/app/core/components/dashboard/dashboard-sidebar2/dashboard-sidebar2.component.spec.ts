import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSidebar2Component } from './dashboard-sidebar2.component';

describe('DashboardSidebar2Component', () => {
  let component: DashboardSidebar2Component;
  let fixture: ComponentFixture<DashboardSidebar2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardSidebar2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSidebar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
