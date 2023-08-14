import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdituserPopupComponent } from './edituser-popup.component';

describe('EdituserPopupComponent', () => {
  let component: EdituserPopupComponent;
  let fixture: ComponentFixture<EdituserPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdituserPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdituserPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
