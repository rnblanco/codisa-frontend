import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "src/app/shared/components/base.component";
import { Property, PropertyImages, rawProperties } from "src/app/shared/models/property.model";
import { MenuItem } from "src/app/shared/models/menu-item.model";
import { imageCardView, isImageCardView } from "../../../shared/models/image-card.model";
import { NavigationEnd, Params } from "@angular/router";
import { filter } from "rxjs";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent extends BaseComponent implements OnInit {
  items: MenuItem[];
  properties: Property[];
  currentProperty: Property;
  currentImages: PropertyImages;
  showMoreDetails: boolean = true;
  view: imageCardView = 'image';
  viewMap: imageCardView = 'map';
  faMapMarkerAlt = faMapMarkerAlt;
  propertyIndex: number = 0;
  
  constructor() {
    super();
  }
  
  ngOnInit(): void {
    this.items = this.loadMenuItems();
    this.loadProperties();
    this.loadParams();
    this.checkRouteParameter(this.router.url);
  }
  
  loadParams(): void {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
    ).subscribe({
      next: (params: Params) => {
        this.checkRouteParameter(params.url);
      }
    })
  }
  
  checkRouteParameter(url: string): void {
    const view = url.split('/').slice(-1)[0];
    if( !isImageCardView(view) ) {
      this.router.navigate([this.routeInformation.app]);
    }
    this.view = view as imageCardView;
  }
  
  changeToMap(): void {
    this.router.navigate([`${this.routeInformation.app}/${this.viewMap}`]);
  }
  
  changeProperty(): void {
    if(!this.properties){
      return;
    }
    
    if (this.properties.length - 1 <= this.propertyIndex) {
      this.propertyIndex = 0;
    }
    else this.propertyIndex++;
    this.loadProperty();
  }
  
  loadProperty():void {
    this.currentProperty = this.properties[this.propertyIndex];
    this.loadImages(this.currentProperty._id);
  }
  
  loadProperties(): void {
    this.loading = true;
    this.subscription.add(
      this.catalogService.getOneByName(`properties`).subscribe({
          next: ( rawProperties: rawProperties ) => {
            this.properties = rawProperties.properties;
            this.currentProperty = this.properties[this.propertyIndex];
            this.loadImages(this.currentProperty._id);
          },
          error: () => this.loading = false
        }
      )
    );
  }
  
  loadImages(id: string): void {
    this.loading = true;
    this.subscription.add(
      this.catalogService.getOneByName(`images/${id}`).subscribe({
          next: (propertyImages: PropertyImages) => {
            this.currentImages = propertyImages;
            this.loading = false;
          },
          error: () => this.loading = false
        }
      )
    );
  }
  
  loadMenuItems(): MenuItem[] {
    return [
      {
        name: 'En Venta',
        children: [
          { name: 'Casas'},
          { name: 'Apartamentos'},
          { name: 'Oficinas'},
          { name: 'Desarrollos nuevos'},
        ]
      },
      {
        name: 'Apartamentos',
        children: [
          { name: 'Brokers'},
          { name: 'Dueños'},
        ]
      },
      {
        name: 'Hipoteca',
        children: [
          { name: 'Entidades financieras'},
          { name: 'Buscar preaprobación'},
        ]
      },
      {
        name: 'Necesito ayuda',
        children: [
          { name: 'Guías para comprar una propiedad'},
        ]
      },
    ];
  }
}
