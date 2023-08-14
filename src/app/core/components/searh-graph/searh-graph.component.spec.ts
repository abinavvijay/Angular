import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearhGraphComponent } from './searh-graph.component';

describe('SearhGraphComponent', () => {
  let component: SearhGraphComponent;
  let fixture: ComponentFixture<SearhGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearhGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearhGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
