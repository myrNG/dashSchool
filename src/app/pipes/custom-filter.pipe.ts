import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {

  transform(students: any, value: any): any {
    // Si rien n'est saisi, la liste complète des étudiants est affichée
    if(value === undefined){
      return students;
    }
    /*
    * on filtre les étudiants via la saisie dont la valeur de l'input passe automatiquement en minuscule
    * Filtre via le lastname de l'élève
    *
    * */

    return students.filter(function(student) {
      return student.lastname.toLowerCase()
                    .includes(value.toLowerCase());

    })

  }

}
