import { TestBed } from '@angular/core/testing';

import { CongeDataService } from './conge-data.service';

describe('CongeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CongeDataService = TestBed.get(CongeDataService);
    expect(service).toBeTruthy();
  });
});
