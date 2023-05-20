import { TestBed } from '@angular/core/testing';

import { InstagramTableService } from './instagram-table.service';

describe('InstagramTableService', () => {
  let service: InstagramTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstagramTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
