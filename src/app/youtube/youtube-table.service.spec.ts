import { TestBed } from '@angular/core/testing';

import { YoutubeTableService } from './youtube-table.service';

describe('YoutubeTableService', () => {
  let service: YoutubeTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YoutubeTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
