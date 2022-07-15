import { Pipe, PipeTransform } from '@angular/core';
import { IndexableObject } from '../models/indexable-object.model';

@Pipe({
	name: 'yesOrNoPipe',
})
export class YesOrNoPipe implements PipeTransform {
	transform(value: unknown): unknown {
		if (typeof value === 'boolean') {
			return value ? 'Si' : 'No';
		}
		return value;
	}
}
