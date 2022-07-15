import { Pipe, PipeTransform } from '@angular/core';
import { IndexableObject } from '../models/indexable-object.model';

@Pipe({
	name: 'customKeyValuePipe',
})
export class CustomKeyValuePipe implements PipeTransform {
	transform(object: Object): IndexableObject[] | undefined {
		
		if(!object){
			return;
		}
		
		let keyValue = [];
		let k: keyof typeof object;
		
		for (k in object) {
			keyValue.push({key: k, value: object[k]});
		}

		return keyValue;
	}
}
