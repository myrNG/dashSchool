import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormArray, FormControl } from "@angular/forms";
import { Student } from "../../models/student";
import  {VueListingComponent} from "../vue-listing/vue-listing.component";
import {ListingService} from '../../services/listing.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-custom-search',
  templateUrl: './custom-search.component.html',
  styleUrls: ['./custom-search.component.sass']

})
export class CustomSearchComponent implements OnInit {
  //students: Observable<Student[]>;
  @Input() students;

  constructor(private listService: ListingService) { }

  ngOnInit() {
  }

}
