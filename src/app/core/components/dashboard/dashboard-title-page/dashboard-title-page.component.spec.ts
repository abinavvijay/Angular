import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTitlePageComponent } from './dashboard-title-page.component';

describe('DashboardTitlePageComponent', () => {
  let component: DashboardTitlePageComponent;
  let fixture: ComponentFixture<DashboardTitlePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardTitlePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardTitlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
