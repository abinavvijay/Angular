import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSubscripitionComponent } from './user-subscripition.component';

describe('UserSubscripitionComponent', () => {
  let component: UserSubscripitionComponent;
  let fixture: ComponentFixture<UserSubscripitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSubscripitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSubscripitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
