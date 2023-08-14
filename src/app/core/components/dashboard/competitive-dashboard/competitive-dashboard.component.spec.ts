import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitiveDashboardComponent } from './competitive-dashboard.component';

describe('CompetitiveDashboardComponent', () => {
  let component: CompetitiveDashboardComponent;
  let fixture: ComponentFixture<CompetitiveDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitiveDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetitiveDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
