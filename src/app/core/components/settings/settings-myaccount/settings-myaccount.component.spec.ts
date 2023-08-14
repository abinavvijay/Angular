import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsMyaccountComponent } from './settings-myaccount.component';

describe('SettingsMyaccountComponent', () => {
  let component: SettingsMyaccountComponent;
  let fixture: ComponentFixture<SettingsMyaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsMyaccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsMyaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
