import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {

  transform(students: any, value: any): any {
    if(value === undefined){
      return students;
    }
    return students.filter(function(student) {
      return student.lastname.toLocaleLowerCase().include(value.toLocaleLowerCase());
    })

  }

}
