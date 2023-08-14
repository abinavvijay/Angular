import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveNewsLetterComponent } from './save-news-letter.component';

describe('SaveNewsLetterComponent', () => {
  let component: SaveNewsLetterComponent;
  let fixture: ComponentFixture<SaveNewsLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveNewsLetterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveNewsLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
