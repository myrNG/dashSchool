/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EditingStudentService } from './editing-student.service';

describe('EditingStudentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditingStudentService]
    });
  });

  it('should ...', inject([EditingStudentService], (service: EditingStudentService) => {
    expect(service).toBeTruthy();
  }));
});
