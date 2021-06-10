import { TestBed } from '@angular/core/testing';

import { KeycloakInitializerService } from './keycloakInitializer.service';

describe('KeycloakService', () => {
  let service: KeycloakInitializerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeycloakInitializerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
