import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultFigureComponent } from './result-figure.component';

describe('ResultFigureComponent', () => {
  let component: ResultFigureComponent;
  let fixture: ComponentFixture<ResultFigureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultFigureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultFigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
