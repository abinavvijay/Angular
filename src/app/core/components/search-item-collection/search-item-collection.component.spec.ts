import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchItemCollectionComponent } from './search-item-collection.component';

describe('SearchItemCollectionComponent', () => {
  let component: SearchItemCollectionComponent;
  let fixture: ComponentFixture<SearchItemCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchItemCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchItemCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
