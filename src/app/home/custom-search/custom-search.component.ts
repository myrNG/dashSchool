import { Component, OnInit } from '@angular/core';

import { Student } from "../../models/student";
import  {VueListingComponent} from "../vue-listing/vue-listing.component";
import {CustomSearhcService} from '../../services/custom-searhc.service';
import {CustomFilterPipe} from '../../pipes/custom-filter.pipe';
import {Observable} from "rxjs";

@Component({
  selector: 'app-custom-search',
  templateUrl: './custom-search.component.html',
  styleUrls: ['./custom-search.component.sass']

})
export class CustomSearchComponent implements OnInit {
  students: Observable<Student[]>;
  constructor() { }

  ngOnInit() {
  }

}
