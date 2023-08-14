import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepasswordPopupComponent } from './changepassword-popup.component';

describe('ChangepasswordPopupComponent', () => {
  let component: ChangepasswordPopupComponent;
  let fixture: ComponentFixture<ChangepasswordPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangepasswordPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangepasswordPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
