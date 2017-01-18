import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'firstLetterUppercase'})

export class FirstLetterUppercasePipe implements PipeTransform {
	
	transform(text: string) {
		return text ? text.charAt(0).toUpperCase() + text.slice(1) : text;
	}
	
}