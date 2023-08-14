import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingtagsAddnewComponent } from './settingtags-addnew.component';

describe('SettingtagsAddnewComponent', () => {
  let component: SettingtagsAddnewComponent;
  let fixture: ComponentFixture<SettingtagsAddnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingtagsAddnewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingtagsAddnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
