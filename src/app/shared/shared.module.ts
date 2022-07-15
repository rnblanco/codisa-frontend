import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { PropertyImageCardComponent } from './components/property-image-card/property-image-card.component';
import { PropertyDetailCardComponent } from './components/property-detail-card/property-detail-card.component';
import { CustomKeyValuePipe } from './pipes/custom-key-value.pipe';
import { YesOrNoPipe } from './pipes/yes-or-no.pipe';

@NgModule({
	declarations: [
		NavigationBarComponent,
    PropertyImageCardComponent,
    PropertyDetailCardComponent,
		CustomKeyValuePipe,
		YesOrNoPipe
	],
	exports: [
		NavigationBarComponent,
		PropertyImageCardComponent,
		PropertyDetailCardComponent,
		CustomKeyValuePipe,
		YesOrNoPipe
	],
	imports: [
		CommonModule,
		NgbNavModule,
		FontAwesomeModule,
		RouterModule
	]
})
export class SharedModule { }
