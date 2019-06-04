import { TestBed } from '@angular/core/testing';

import { FicheDataService } from './fiche-data.service';

describe('FicheDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FicheDataService = TestBed.get(FicheDataService);
    expect(service).toBeTruthy();
  });
});
