import { Component, OnInit, Input, trigger, state, style, transition, animate } from '@angular/core';
import { Student } from "../../models/student";
import { Skill } from "../../models/skill";
import { ListingService } from '../../services/listing.service';
import { CustomFilterPipe } from '../../pipes/custom-filter.pipe';
import { FormGroup, FormControl } from "@angular/forms";
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

	editForm = new FormGroup( {
		id: new FormControl(),
		firstname: new FormControl(),
		lastname: new FormControl(),
		birthDate: new FormControl(),
		address: new FormControl(),
		phone: new FormControl(),
		email: new FormControl(),
		emergencyContact: new FormControl(),
		github: new FormControl(),
		linkedin: new FormControl(),
		personalProject: new FormControl(),
		//skills: new FormGroup(
		//	1:
		//)
	} );

	constructor( private listService: ListingService, private editService: EditingStudentService, private deletingService: DeletingStudentService ) {
	}

	ngOnInit() {
		this.getStudents();
	}

	/**
	 * Fonction appelée par le formulaire d'édition
	 * qui utilise le two-way binding
	 */
	onEdit() {
		console.log( " tentative d'édition d'élève " );
		this.editService.updateStudent( this.editForm.value.id, this.editForm.value )
			.subscribe(
				(message) => {
					console.log(message);
				})
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
		let ok = confirm('Vous êtes sur le point de supprimer un élève, êtes-vous sûr(e) ?');
		if (ok) {
			this.deletingService.deleteStudent(id)
				.subscribe(
					(message) => {
						console.log(message);
				})
		}
	}

}
