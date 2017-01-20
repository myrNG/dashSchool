import { Component, OnInit } from '@angular/core';
import {Student} from "../../models/student";
import {ListingService} from '../../services/listing.service';


@Component({
  selector: 'app-vue-listing',
  templateUrl: './vue-listing.component.html',
  styleUrls: ['./vue-listing.component.sass'],
  providers: [ListingService]
})
export class VueListingComponent implements OnInit {
  students: Student[];

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

  seeMore(){ }

  deleteStudent(){ }

}