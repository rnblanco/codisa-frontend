import { Component, Input, OnInit } from '@angular/core';
import { Property, ReadableFeatures } from '../../models/property.model';
import { FeatureIcon } from '../../constants/feature-icon';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-property-detail-card',
  templateUrl: './property-detail-card.component.html',
  styleUrls: ['./property-detail-card.component.scss']
})
export class PropertyDetailCardComponent extends BaseComponent implements OnInit {
  @Input() currentProperty: Property;
  
  details: any [];
  showMoreDetails: boolean = false;
  faAngleDown = faAngleDown;
  
  Object = Object;
  featureIcon = FeatureIcon;
  readableFeatures = ReadableFeatures;
  
  constructor() {
    super();
  }

  ngOnInit(): void { }
  
  getType(element: unknown){
    return typeof element;
  }
  
}
