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
      id: [null],
      name: ['', Validators.required],
      propertyId: [null],
      userId: [null],
      city: ['', Validators.required],
      district: [''],
      neighborhood: [''],
      plot: [''],
      parcel: [''],
      type: [''],
      coordinates: ['']
    });
  }

  ngOnInit(): void {
    this.loadProperties();
  }

  loadProperties(): void {
    this.propertyService.getProperties().subscribe((data: Property[]) => {
      this.properties = data;
    });
  }

  addProperty(): void {
    this.selectedProperty = {
      id: 0,
      name: '',
      propertyId: 0,
      userId: 0,
      city: '',
      district: '',
      neighborhood: '',
      plot: '',
      parcel: '',
      type: '',
      coordinates: ''
    };
    this.propertyForm.reset(this.selectedProperty);
  }

  editProperty(property: Property): void {
    this.selectedProperty = property;
    this.propertyForm.patchValue(property);
  }

  deleteProperty(id: number): void {
    this.propertyService.deleteProperty(id).subscribe(() => {
      this.loadProperties();
    });
  }

  onSubmit(): void {
    if (this.propertyForm.invalid) {
      return;
    }

    if (this.selectedProperty && this.selectedProperty.id) {
      this.propertyService.updateProperty(this.propertyForm.value).subscribe(() => {
        this.loadProperties();
        this.selectedProperty = null;
      });
    } else {
      this.propertyService.addProperty(this.propertyForm.value).subscribe(() => {
        this.loadProperties();
        this.selectedProperty = null;
      });
    }
  }
}