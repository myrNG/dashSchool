/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DeletingStudentService } from './deleting-student.service';

describe('DeletingStudentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeletingStudentService]
    });
  });

  it('should ...', inject([DeletingStudentService], (service: DeletingStudentService) => {
    expect(service).toBeTruthy();
  }));
});
