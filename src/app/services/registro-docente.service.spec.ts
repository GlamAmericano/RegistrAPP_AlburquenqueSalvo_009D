import { TestBed } from '@angular/core/testing';

import { RegistroDocenteService } from './registro-docente.service';

describe('RegistroDocenteService', () => {
  let service: RegistroDocenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroDocenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
