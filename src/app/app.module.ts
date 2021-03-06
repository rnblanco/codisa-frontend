import { Injector, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppInjector } from "./app-injector.service";
import { HttpClientModule } from "@angular/common/http";
import { CustomKeyValuePipe } from "./shared/pipes/custom-key-value.pipe";
import { YesOrNoPipe } from "./shared/pipes/yes-or-no.pipe";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { ThousandsPipe } from "./shared/pipes/thousands.pipe";
import { GoogleMapsModule } from "@angular/google-maps";

@NgModule({
  declarations: [
    AppComponent
  ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SharedModule,
		NgbModule,
		HttpClientModule,
		BrowserAnimationsModule,
		GoogleMapsModule
  ],
	providers: [
		CustomKeyValuePipe,
		YesOrNoPipe,
		ThousandsPipe
	],
  bootstrap: [AppComponent]
})
export class AppModule {
	constructor(injector: Injector) {
		AppInjector.injector = injector;
	}
}
