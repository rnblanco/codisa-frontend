import { Component, OnInit } from '@angular/core';
import { BaseComponent } from './shared/components/base.component';
import { MenuItem } from './shared/models/menu-item.model';
import { Property, PropertyImages, rawProperties } from './shared/models/property.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent implements OnInit {
  title = 'codisa-frontend';
  items: MenuItem[];
  properties: Property[];
  currentProperty: Property;
  currentImages: PropertyImages;
  
  constructor() {
    super();
  }
  
  ngOnInit(): void {
    this.items = this.loadMenuItems();
    this.loadProperties();
  }
  
  loadProperties(): void {
    this.loading = true;
    this.subscription.add(
      this.catalogService.getOneByName(`properties`).subscribe({
          next: ( rawProperties: rawProperties ) => {
            this.properties = rawProperties.properties;
            this.currentProperty = this.properties[0];
            this.loadImages(this.currentProperty._id);
            this.loading = false;
          },
          error: () => this.loading = false
        }
      )
    );
  }
  
  loadImages(id: string) {
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
