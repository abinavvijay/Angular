import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearhResultBarComponent } from './searh-result-bar.component';

describe('SearhResultBarComponent', () => {
  let component: SearhResultBarComponent;
  let fixture: ComponentFixture<SearhResultBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearhResultBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearhResultBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
