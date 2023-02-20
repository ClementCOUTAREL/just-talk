import { TestBed } from '@angular/core/testing';

import { DiscussionsServiceService } from './discussions-service.service';

describe('DiscussionsServiceService', () => {
  let service: DiscussionsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscussionsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
