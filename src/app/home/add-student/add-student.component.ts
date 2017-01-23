import { Component, OnInit } from '@angular/core';
import { ListingService } from "../../services/listing.service";
import { Skill } from "../../models/skill";
import { Student } from "../../models/student";
import { Validators, FormBuilder, FormGroup, FormArray, FormControl } from "@angular/forms";
import { PlatformLocation } from "@angular/common";
import Any = jasmine.Any;
import { AddingStudentService } from "../../services/adding-student.service";

@Component( {
	selector: 'app-add-student',
	templateUrl: './add-student.component.html',
	styleUrls: [ './add-student.component.sass' ],
	providers: [AddingStudentService]
} )
export class AddStudentComponent implements OnInit {
	skills: Skill[];
	newUser: Student;
	addStudentForm: FormGroup;
	
	constructor( private listService: ListingService, private addingService: AddingStudentService, public fb: FormBuilder ) {
	}
	
	initForm() {
		//let allSkills: FormArray = new FormArray([]);
		//for (let i = 0; i < this.skills.length; i++) {
		//	let fg = new FormGroup({});
		//	fg.addControl(this.skills[i].id.toString(), new FormControl(false))
		//	allSkills.push(fg)
		//}
		//
		//console.log(allSkills);
		
		this.addStudentForm = this.fb.group({
			gender: ["", Validators.required],
			firstname: ["", Validators.required],
			lastname: ["", Validators.required],
			birthdate: ["", Validators.required],
			address: ["", Validators.required],
			phone: ["", Validators.required],
			email: ["", Validators.required],
			emergencyContact: [""],
			github: [""],
			linkedin: [""],
			personalProject: [""],
			photo: [""],
			//skills: allSkills
		})
	}
	
	ngOnInit() {
		this.getSkills();
	}
	
	test(event) {
		event.preventDefault();
		console.log(this.addStudentForm.value);
		this.addingService.addStudent(this.addStudentForm.value)
			.subscribe(
				data => {
					console.log("Réponse serveur OK");
					//if (this.auth.isAuthentificated) {
					//	this.router.navigate([this.returnUrl]);
					//} else {
					//	this.loading = false;
					//	this.authenficationFailed = true;
					//}
				},
				error => {
					//this.loading = false;
					console.log("erreur d'authentification", error)
				});
	}
	
	getSkills() {
		this.listService.getListing()
			.subscribe(
				( items ) => {
					this.skills = items[0].availableSkills;
					console.log( 'Skills', this.skills );
					this.initForm();
				}
			)
	}
	
}
