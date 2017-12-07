import { TestBed, inject } from '@angular/core/testing';
 
import { MainProgressBarService } from './main-progress-bar.service'; 

describe('MainProgressBarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainProgressBarService]
    });
  });

  it('should be created', inject([MainProgressBarService], (service: MainProgressBarService) => {
    expect(service).toBeTruthy();
  }));
});
