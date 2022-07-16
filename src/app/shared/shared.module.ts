import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { CustomKeyValuePipe } from './pipes/custom-key-value.pipe';
import { YesOrNoPipe } from './pipes/yes-or-no.pipe';
import { ThousandsPipe } from "./pipes/thousands.pipe";

@NgModule({
	declarations: [
		CustomKeyValuePipe,
		YesOrNoPipe,
		ThousandsPipe
	],
	exports: [
		CustomKeyValuePipe,
		YesOrNoPipe,
		ThousandsPipe
	],
	imports: [
		CommonModule,
		NgbNavModule,
		FontAwesomeModule,
		RouterModule
	]
})
export class SharedModule { }
