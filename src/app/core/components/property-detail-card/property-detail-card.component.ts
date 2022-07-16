import { Component, Input, OnInit } from '@angular/core';
import { Property, ReadableFeatures } from '../../../shared/models/property.model';
import { FeatureIcon } from '../../../shared/constants/feature-icon';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { BaseComponent } from '../../../shared/components/base.component';

@Component({
  selector: 'app-property-detail-card',
  templateUrl: './property-detail-card.component.html',
  styleUrls: ['./property-detail-card.component.scss']
})
export class PropertyDetailCardComponent extends BaseComponent implements OnInit {
  @Input() currentProperty: Property;
  @Input() showMoreDetails: boolean = false;
  
  lotSize:string = 'lotSize';
  details: any [];
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
