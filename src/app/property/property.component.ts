import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PropertyService } from '../../services/property.service';
import { Property } from '../models/property.model';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  properties: Property[] = [];
  selectedProperty: Property | null = null;
  propertyForm: FormGroup;

  constructor(private propertyService: PropertyService, private fb: FormBuilder) {
    this.propertyForm = this.fb.group({
      name: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadProperties();
  }

  loadProperties() {
    this.propertyService.getProperties().subscribe(data => {
      this.properties = data;
    });
  }

  addProperty() {
    if (this.propertyForm.valid) {
      this.propertyService.addProperty(this.propertyForm.value).subscribe(() => {
        this.loadProperties();
        this.propertyForm.reset();
      });
    }
  }

  editProperty(property: Property) {
    this.selectedProperty = property;
    this.propertyForm.patchValue(property);
  }

  deleteProperty(id: number) {
    this.propertyService.deleteProperty(id).subscribe(() => {
      this.loadProperties();
    });
  }

  onSubmit() {
    if (this.selectedProperty) {
      this.propertyService.updateProperty(this.selectedProperty.id, this.propertyForm.value).subscribe(() => {
        this.loadProperties();
        this.propertyForm.reset();
        this.selectedProperty = null;
      });
    } else {
      this.addProperty();
    }
  }
}
