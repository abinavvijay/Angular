import { TestBed } from '@angular/core/testing';

import { ResultInFigureService } from './result-in-figure.service';

describe('ResultInFigureService', () => {
  let service: ResultInFigureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultInFigureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
