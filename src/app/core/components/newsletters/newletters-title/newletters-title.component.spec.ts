import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlettersTitleComponent } from './newletters-title.component';

describe('NewlettersTitleComponent', () => {
  let component: NewlettersTitleComponent;
  let fixture: ComponentFixture<NewlettersTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewlettersTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewlettersTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
