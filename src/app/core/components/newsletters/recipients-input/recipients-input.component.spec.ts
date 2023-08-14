import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientsInputComponent } from './recipients-input.component';

describe('RecipientsInputComponent', () => {
  let component: RecipientsInputComponent;
  let fixture: ComponentFixture<RecipientsInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipientsInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipientsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
