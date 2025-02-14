import { TestBed } from '@angular/core/testing';

import { DataFileService } from './data-file.service';

describe('DataFileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataFileService = TestBed.get(DataFileService);
    expect(service).toBeTruthy();
  });
});
