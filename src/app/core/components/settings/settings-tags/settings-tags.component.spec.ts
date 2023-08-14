import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsTagsComponent } from './settings-tags.component';

describe('SettingsTagsComponent', () => {
  let component: SettingsTagsComponent;
  let fixture: ComponentFixture<SettingsTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsTagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
