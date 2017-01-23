/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CustomSearhcService } from './custom-searhc.service';

describe('CustomSearhcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomSearhcService]
    });
  });

  it('should ...', inject([CustomSearhcService], (service: CustomSearhcService) => {
    expect(service).toBeTruthy();
  }));
});
