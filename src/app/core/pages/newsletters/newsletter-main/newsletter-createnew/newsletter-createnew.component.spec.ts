import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterCreatenewComponent } from './newsletter-createnew.component';

describe('NewsletterCreatenewComponent', () => {
  let component: NewsletterCreatenewComponent;
  let fixture: ComponentFixture<NewsletterCreatenewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsletterCreatenewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsletterCreatenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
