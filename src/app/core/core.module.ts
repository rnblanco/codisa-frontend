import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './containers/main-page/main-page.component';
import { CoreRoutingModule } from './core-routing.module';
import { NotFoundPageComponent } from '../shared/containers/not-found-page/not-found-page.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { PropertyImageCardComponent } from './components/property-image-card/property-image-card.component';
import { PropertyDetailCardComponent } from './components/property-detail-card/property-detail-card.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SharedModule } from "../shared/shared.module";
import { GoogleMapsModule } from "@angular/google-maps";
import { GMapComponent } from './components/g-map/g-map.component';

@NgModule({
  declarations: [
    MainPageComponent,
    NavigationBarComponent,
    PropertyDetailCardComponent,
    PropertyImageCardComponent,
    NotFoundPageComponent,
    GMapComponent,
  ],
  imports: [
    CoreRoutingModule,
    RouterModule,
    CommonModule,
    NgbModule,
    FontAwesomeModule,
    GoogleMapsModule,
    SharedModule
  ]
})
export class CoreModule { }
