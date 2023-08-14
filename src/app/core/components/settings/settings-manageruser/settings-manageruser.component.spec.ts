import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsManageruserComponent } from './settings-manageruser.component';

describe('SettingsManageruserComponent', () => {
  let component: SettingsManageruserComponent;
  let fixture: ComponentFixture<SettingsManageruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsManageruserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsManageruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
