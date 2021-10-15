import { TestBed } from '@angular/core/testing';

import { NewdocumentService } from './newdocument.service';

describe('NewdocumentService', () => {
  let service: NewdocumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewdocumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
