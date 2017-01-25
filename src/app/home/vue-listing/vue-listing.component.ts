import { Component, OnInit, Input, trigger, state, style, transition, animate } from '@angular/core';
import { Student } from "../../models/student";
import { Skill } from "../../models/skill";
import { ListingService } from '../../services/listing.service';
import { CustomFilterPipe } from '../../pipes/custom-filter.pipe';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
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
	
	editForm: FormGroup = this.fb.group( {
		id: [ "", Validators.required ],
		firstname: [ "", Validators.required ],
		lastname: [ "", Validators.required ],
		birthDate: [ "", Validators.required ],
		address: [ "", Validators.required ],
		phone: [ "", Validators.required ],
		email: [ "", Validators.required ],
		emergencyContact: [ "" ],
		github: [ "" ],
		linkedin: [ "" ],
		personalProject: [ "" ],
		skills: this.fb.group( {
			1: '',
			2: '',
			3: '',
			4: '',
			5: '',
			6: '',
			7: '',
			8: '',
			9: '',
			10: '',
			11: '',
			12: '',
			13: '',
			14: '',
			15: '',
			16: '',
			17: '',
			18: '',
			19: '',
			20: ''
		} )
	} );
	
	constructor( private listService: ListingService, private editService: EditingStudentService, private deletingService: DeletingStudentService, private fb: FormBuilder ) {
	}
	
	ngOnInit() {
		this.getStudents();
	}
	/**
	 * On checke si l'id de la compétence passée en paramètre
	 * matche avec une compétence de l'élève
	 * @param skillName
	 * @param student
	 * @returns {boolean}
	 */
	isAlreadyChosen( skillName, student ) {
		for ( let i = 0; i < student.skills.length; i++ ) {
			if ( skillName == student.skills[ i ] ) {
				return true;
			}
		}
		return false;
	}
	
	isAlreadyChosenForm(){
		
	}
	
	/**
	 * Fonction appelée par le formulaire d'édition
	 * qui utilise le two-way binding
	 */
	onEdit() {
		let objectSkills = this.editForm.value.skills;
		let selectedSkills = Object.keys(objectSkills)
			.filter((key) => { if (objectSkills[key] == true ) return key })
			.map((key) => parseInt(key));
		console.log( " tentative d'édition d'élève avec values -> ", this.editForm.value );
		console.log( " tentative d'édition d'élève avec skills -> ", selectedSkills );
		this.editService.updateStudent( this.editForm.value.id, this.editForm.value, selectedSkills )
			.subscribe(
				( message ) => {
					console.log( message );
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
					console.log( student )
				}
			)
	}
	
	//Voir la fiche détaillée de l'élève
	seeMore( id: number ) {
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
