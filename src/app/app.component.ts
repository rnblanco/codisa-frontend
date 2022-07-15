import { Component, OnInit } from '@angular/core';
import { MenuItem } from './shared/models/menu-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'codisa-frontend';
  items: MenuItem[];
  
  constructor() {}
  
  ngOnInit(): void {
    this.items = this.loadMenuItems();
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
