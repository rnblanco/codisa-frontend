import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { GoogleMap, MapInfoWindow, MapMarker } from "@angular/google-maps";
import { Property } from "../../../shared/models/property.model";

@Component({
  selector: 'app-g-map',
  templateUrl: './g-map.component.html',
  styleUrls: ['./g-map.component.scss']
})
export class GMapComponent implements OnInit {
  @Input() currentProperty: Property;
  @Input() mapClass: string;
  @Input() height: string;
  @Input() width: string;

  @ViewChild('myGoogleMap', { static: false }) map: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow;
  
  zoom = 12;
  maxZoom = 15;
  minZoom = 8;
  center: google.maps.LatLngLiteral;
  
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    maxZoom:this.maxZoom,
    minZoom:this.minZoom,
  }
  
  markers = [] as any;
  infoContent = '';
  
  ngOnInit() {
    this.center = {
      lat: parseFloat(this.currentProperty.location.latitude),
      lng: parseFloat(this.currentProperty.location.longitude),
    }
    this.markers.push({
      position: {
        lat: parseFloat(this.currentProperty.location.latitude),
        lng: parseFloat(this.currentProperty.location.longitude),
      },
      info: this.currentProperty.address,
      options: { animation: google.maps.Animation.DROP },
    })
  }
  
  openInfo(marker: MapMarker, content: string) {
    this.infoContent = content;
    this.info.open(marker)
  }
}