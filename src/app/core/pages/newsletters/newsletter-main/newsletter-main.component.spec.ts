import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterMainComponent } from './newsletter-main.component';

describe('NewsletterMainComponent', () => {
  let component: NewsletterMainComponent;
  let fixture: ComponentFixture<NewsletterMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsletterMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsletterMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
