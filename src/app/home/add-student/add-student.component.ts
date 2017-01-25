import { Component, OnInit } from '@angular/core';
import { ListingService } from "../../services/listing.service";
import { Skill } from "../../models/skill";
import { Student } from "../../models/student";
import { Validators, FormBuilder, FormGroup, FormArray, FormControl } from "@angular/forms";
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
	
	addStudentForm: FormGroup = this.fb.group({
		gender: ["", Validators.required],
		firstname: ["", Validators.required],
		lastname: ["", Validators.required],
		birthDate: ["", Validators.required],
		address: ["", Validators.required],
		phone: ["", Validators.required],
		email: ["", Validators.required],
		emergencyContact: [""],
		github: [""],
		linkedin: [""],
		personalProject: [""],
		photo: [""],
		skills: this.fb.group({
			1: false,
			2: false,
			3: false,
			4: false,
			5: false,
			6: false,
			7: false,
			8: false,
			9: false,
			10: false,
			11: false,
			12: false,
			13: false,
			14: false,
			15: false,
			16: false,
			17: false,
			18: false,
			19: false,
			20: false
		})
	});
	
	constructor( private listService: ListingService, private addingService: AddingStudentService, public fb: FormBuilder ) {
	}
	
	ngOnInit() {
		this.getSkills();
	}
	
	onSubmit(event) {
		event.preventDefault();
		let objectSkills = this.addStudentForm.value.skills;
		let selectedSkills = Object.keys(objectSkills)
			.filter((key) => {
				 if (objectSkills[key] == true ) return key
			})
			.map((key) => parseInt(key));
		console.log("tentative d'ajout d'un élève -> ", this.addStudentForm.value);
		this.addingService.addStudent(this.addStudentForm.value, selectedSkills)
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
				}
			)
	}
	
}
