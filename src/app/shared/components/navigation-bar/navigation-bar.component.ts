import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  @Input() items: MenuItem[];
  faAngleDown = faAngleDown;
  
  constructor() { }

  ngOnInit(): void { }

}
