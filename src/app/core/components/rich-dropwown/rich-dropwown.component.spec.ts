import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RichDropwownComponent } from './rich-dropwown.component';

describe('RichDropwownComponent', () => {
  let component: RichDropwownComponent;
  let fixture: ComponentFixture<RichDropwownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RichDropwownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RichDropwownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
