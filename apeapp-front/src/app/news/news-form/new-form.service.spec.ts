import { TestBed } from '@angular/core/testing';

import { NewFormService } from './new-form.service';

describe('NewFormService', () => {
  let service: NewFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
