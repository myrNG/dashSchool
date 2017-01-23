/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddingStudentService } from './adding-student.service';

describe('AddingStudentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddingStudentService]
    });
  });

  it('should ...', inject([AddingStudentService], (service: AddingStudentService) => {
    expect(service).toBeTruthy();
  }));
});
