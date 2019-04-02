import { TestBed } from '@angular/core/testing';

import { HeadersListService } from './headers-list.service';

describe('HeadersListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeadersListService = TestBed.get(HeadersListService);
    expect(service).toBeTruthy();
  });
});
