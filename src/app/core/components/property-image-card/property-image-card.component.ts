import { Component, Input, OnInit } from "@angular/core";
import { Property, PropertyImages } from "../../../shared/models/property.model";
import { imageCardView } from "../../../shared/models/image-card.model";
import { BaseComponent } from "../../../shared/components/base.component";

@Component({
  selector: 'app-property-image-card',
  templateUrl: './property-image-card.component.html',
  styleUrls: ['./property-image-card.component.scss']
})
export class PropertyImageCardComponent extends BaseComponent implements OnInit {
  @Input() currentImages: PropertyImages;
  @Input() currentProperty: Property;
  @Input() view: imageCardView;
  
  imageView: imageCardView = 'image';
  mapView: imageCardView = 'map';
  
  constructor() {
    super();
  }

  ngOnInit(): void {
  }
  
}
