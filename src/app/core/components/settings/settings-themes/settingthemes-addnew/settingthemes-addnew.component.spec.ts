import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingthemesAddnewComponent } from './settingthemes-addnew.component';

describe('SettingthemesAddnewComponent', () => {
  let component: SettingthemesAddnewComponent;
  let fixture: ComponentFixture<SettingthemesAddnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingthemesAddnewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingthemesAddnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
