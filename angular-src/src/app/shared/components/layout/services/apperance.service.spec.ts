import { TestBed, inject } from '@angular/core/testing';

import { ApperanceService } from './apperance.service';

describe('ApperanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApperanceService]
    });
  });

  it('should be created', inject([ApperanceService], (service: ApperanceService) => {
    expect(service).toBeTruthy();
  }));
});
