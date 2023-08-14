import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceDashboardComponent } from './advance-dashboard.component';

describe('AdvanceDashboardComponent', () => {
  let component: AdvanceDashboardComponent;
  let fixture: ComponentFixture<AdvanceDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvanceDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
