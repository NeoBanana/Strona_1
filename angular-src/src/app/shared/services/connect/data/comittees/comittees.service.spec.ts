import { TestBed, inject } from '@angular/core/testing';

import { ComitteesService } from './comittees.service';

describe('ComitteesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComitteesService]
    });
  });

  it('should be created', inject([ComitteesService], (service: ComitteesService) => {
    expect(service).toBeTruthy();
  }));
});
