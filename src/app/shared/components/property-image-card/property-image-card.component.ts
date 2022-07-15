import { Component, Input, OnInit } from '@angular/core';
import { Property, PropertyImages } from '../../models/property.model';

@Component({
  selector: 'app-property-image-card',
  templateUrl: './property-image-card.component.html',
  styleUrls: ['./property-image-card.component.scss']
})
export class PropertyImageCardComponent implements OnInit {
  @Input() currentImages: PropertyImages;
  @Input() currentProperty: Property;
  
  constructor() { }

  ngOnInit(): void {
  }

}
