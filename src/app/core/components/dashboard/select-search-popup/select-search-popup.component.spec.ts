import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSearchPopupComponent } from './select-search-popup.component';

describe('SelectSearchPopupComponent', () => {
  let component: SelectSearchPopupComponent;
  let fixture: ComponentFixture<SelectSearchPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectSearchPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectSearchPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
