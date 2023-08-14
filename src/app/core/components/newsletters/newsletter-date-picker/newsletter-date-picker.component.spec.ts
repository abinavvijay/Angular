import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterDatePickerComponent } from './newsletter-date-picker.component';

describe('NewsletterDatePickerComponent', () => {
  let component: NewsletterDatePickerComponent;
  let fixture: ComponentFixture<NewsletterDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsletterDatePickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsletterDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
