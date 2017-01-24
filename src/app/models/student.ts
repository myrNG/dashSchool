import { Skill } from "./skill";
export class Student {
	id: number;
	firstname: string;  // Obligatoire
	lastname: string; // Obligatoire
	birthDate: Object = { // Obligatoire
		date: null
	};
	address: string; // Obligatoire
	phone: string; // Obligatoire
	email: string; // Obligatoire
	emergencyContact: string;
	github: string;
	linkedIn: string;
	personalProject: string;
	photo: string;
	gender: string; // Obligatoire
	skills: Skill[];
	// il manque la specialisation!
}

