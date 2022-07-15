import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyImageCardComponent } from './property-image-card.component';

describe('PropertyImageCardComponent', () => {
  let component: PropertyImageCardComponent;
  let fixture: ComponentFixture<PropertyImageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyImageCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyImageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
