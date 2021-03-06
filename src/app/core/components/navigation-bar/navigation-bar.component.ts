import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { MenuItem } from '../../../shared/models/menu-item.model';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { BaseComponent } from 'src/app/shared/components/base.component';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent extends BaseComponent implements OnInit {
  @Input() items: MenuItem[];
  @Output() changeProperty = new EventEmitter();
  faAngleDown = faAngleDown;
  
  constructor() {
    super();
  }

  ngOnInit(): void { }

}
