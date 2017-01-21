import { Component, OnInit, Input, trigger, state, style, transition, animate } from '@angular/core';
import {Student} from "../../models/student";
import {ListingService} from '../../services/listing.service';


@Component({
  selector: 'app-vue-listing',
  templateUrl: './vue-listing.component.html',
  styleUrls: ['./vue-listing.component.sass'],
  providers: [ListingService],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(500)
      ]),
      transition('* => void', [
        animate(500, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]

})
export class VueListingComponent implements OnInit {
  students: Student[];
  activeId: number;

  constructor(private listService: ListingService) { }

  ngOnInit() {
    this.getStudents();
    console.log('Students',this.students);
  }

  getStudents(){
    this.listService.getListing()
      .subscribe(
        students => this.students = students
      )
  }

  addStudent(){ }

  //Voir la fiche détaillée de l'élève
  seeMore(id: number){
    if(id){
      this.activeId = id;
    }
  }

  deleteStudent(){ }

}
