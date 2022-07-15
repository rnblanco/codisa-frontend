import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';



@NgModule({
	declarations: [
		NavigationBarComponent
	],
	exports: [
		NavigationBarComponent
	],
	imports: [
		CommonModule,
		NgbNavModule,
		FontAwesomeModule,
		RouterModule
	]
})
export class SharedModule { }
