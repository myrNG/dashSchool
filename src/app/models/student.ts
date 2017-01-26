import { Skill } from "./skill";
export class Student {
	id: number;
	firstname: string;  // Obligatoire
	lastname: string; // Obligatoire
	birthDate;
	address: string; // Obligatoire
	phone: string; // Obligatoire
	email: string; // Obligatoire
	emergencyContact: string;
	github: string;
	linkedIn: string;
	personalProject: string;
	photo: string;
	gender: string; // Obligatoire
	skills;
	availableSkills: Skill[];
}

