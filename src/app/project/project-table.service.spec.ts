import { TestBed } from '@angular/core/testing';

import { ProjectTableService } from './project-table.service';

describe('ProjectTableService', () => {
  let service: ProjectTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
