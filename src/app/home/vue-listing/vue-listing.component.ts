import { Component, OnInit, Input, trigger, state, style, transition, animate } from '@angular/core';
import { Student } from "../../models/student";
import { Skill } from "../../models/skill";
import { ListingService } from '../../services/listing.service';
import { CustomFilterPipe } from '../../pipes/custom-filter.pipe';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from "@angular/forms";
import { EditingStudentService } from "../../services/editing-student.service";
import { DeletingStudentService } from "../../services/deleting-student.service";

@Component( {
	selector: 'app-vue-listing',
	templateUrl: './vue-listing.component.html',
	styleUrls: [ './vue-listing.component.sass' ],
	providers: [ ListingService, EditingStudentService, DeletingStudentService ],
	animations: [
		trigger( 'flyInOut', [
			state( 'in', style( { transform: 'translateX(0)' } ) ),
			transition( 'void => *', [
				style( { transform: 'translateX(-100%)' } ),
				animate( 500 )
			] ),
			transition( '* => void', [
				animate( 500, style( { transform: 'translateX(100%)' } ) )
			] )
		] )
	]
	
} )
export class VueListingComponent implements OnInit {
	
	students: Student[];
	activeId: number;
	skills: Skill[];
	student: Student;
	
	// edit form
	editFormGroup:FormGroup;
	skillsFormGroup:FormArray;
	
	constructor( private listService: ListingService, private editService: EditingStudentService, private deletingService: DeletingStudentService, private fb: FormBuilder ) {
	}
	
	ngOnInit() {
		this.skillsFormGroup = this.fb.array([]);
		this.editFormGroup = this.fb.group({
			id: [ '' ],
			firstname: [ '' ],
			lastname: [ '' ],
			birthDate: [ '' ],
			address: [ '' ],
			phone: [ '' ],
			email: [ '' ],
			emergencyContact: [ '' ],
			github: [ '' ],
			linkedin: [ '' ],
			personalProject: [ '' ],
			skillsArray: this.skillsFormGroup
		});
		this.getStudents();
	}
	
	changeSkills(event, id){
		if (event.target.checked) {
			this.skillsFormGroup.value.forEach((skill) => {
				if (skill.id == id) {
					skill.checked = true;
				}
			});
		} else {
			this.skillsFormGroup.value.forEach((skill) => {
				if (skill.id == id) {
					skill.checked = false;
				}
			});
		}
	}
	
	/**
	 * Fonction appelée par le formulaire d'édition
	 * qui utilise le two-way binding
	 */
	onEdit() {
		let objectSkills = this.editFormGroup.value.skillsArray;
		let selectedSkills = objectSkills
			.filter((skill) => { if (skill.checked == true ) return skill })
			.map((skill) => parseInt(skill.id));
		console.log( " tentative d'édition d'élève avec values -> ", this.editFormGroup.value );
		console.log( " tentative d'édition d'élève avec skills -> ", selectedSkills );
		this.editService.updateStudent( this.editFormGroup.value.id, this.editFormGroup.value, selectedSkills )
			.subscribe(
				( message ) => {
					console.log( message );
					if (this.editService.isUpdated) {
						this.seeLess()
						alert("La fiche de " + this.editFormGroup.value.firstname + " " + this.editFormGroup.value.lastname + ' a bien été modifiée !' );
					}
				} )
	}
	
	/**
	 * Récupère les étudiants en BDD
	 */
	getStudents() {
		this.listService.getListing()
			.retry( 3 ) // On retente 3 fois si la requete failed
			.subscribe(
				( students ) => {
					this.students = students;
					console.log( 'Students', this.students );
				}
			)
	}
	
	getStudent( id: number ) {
		this.listService.getStudent( id )
			.subscribe(
				( student ) => {
					this.student = student;
					this.student.birthDate = this.student.birthDate.date.slice(0,10)
					console.log( "détail de l'étudiant -> ", student );
					this.skillsFormGroup = this.generateAcquiredSkills(this.students[0].availableSkills, this.student);
					this.editFormGroup = this.fb.group({
						id: [ this.student.id ],
						firstname: [ this.student.firstname ],
						lastname: [ this.student.lastname ],
						birthDate: [ this.student.birthDate ],
						address: [ this.student.address ],
						phone: [ this.student.phone ],
						email: [ this.student.email ],
						emergencyContact: [ this.student.emergencyContact ],
						github: [ this.student.github ],
						linkedin: [ this.student.linkedIn ],
						personalProject: [ this.student.personalProject ],
						skillsArray: this.skillsFormGroup
					});
					console.log('Formulaire dynamique créé -> ', this.editFormGroup)
				}
			)
	}
	
	/**
	 * On génère un FormArray dans lequel seront affichés les compétences
	 * acquises (donc sélectionnées) ainsi que celles disponibles
	 * -- Acquis: true, Non acquis mais disponible: false --
	 * I DID IT BRRRUH
	 * @param availableSkills
	 * @param student
	 * @returns {FormArray}
	 */
	private generateAcquiredSkills( availableSkills, student ): FormArray{
		let formArray: FormArray = new FormArray([]);
		
		let properStudentSkills = student.skills;
		
		availableSkills.forEach((availableSkill) => {
			let obj = {};
			let id = availableSkill.id;
			obj['id'] = id;
			obj['checked'] = properStudentSkills.includes(availableSkill.name);
			obj['name'] = availableSkill.name;
			formArray.push(new FormControl(obj));
		});
		console.info('formArray skills -> ', formArray);
		return formArray;
	}
	
	//Voir la fiche détaillée de l'élève
	seeMore( id: number ) {
		this.activeId = null;
		if ( id ) {
			this.activeId = id;
			this.getStudent( id );
		}
	}
	
	seeLess() {
		this.activeId = null;
	}
	
	deleteStudent( id ) {
		console.log( 'tentative de suppression de student' );
		let ok = confirm( 'Vous êtes sur le point de supprimer un élève, êtes-vous sûr(e) ?' );
		if ( ok ) {
			this.deletingService.deleteStudent( id )
				.subscribe(
					( message ) => {
						console.log( message );
					} )
		}
	}
	
}
