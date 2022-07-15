import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppInjector } from './app-injector.service';
import { HttpClientModule } from '@angular/common/http';
import { CustomKeyValuePipe } from './shared/pipes/custom-key-value.pipe';
import { YesOrNoPipe } from './shared/pipes/yes-or-no.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SharedModule,
		NgbModule,
	  FontAwesomeModule,
		HttpClientModule,
		BrowserAnimationsModule
  ],
	providers: [
		CustomKeyValuePipe,
		YesOrNoPipe
	],
  bootstrap: [AppComponent]
})
export class AppModule {
	constructor(injector: Injector) {
		AppInjector.injector = injector;
	}
}
