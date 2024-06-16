import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Property {
  id: number;
  name: string;
  city: string;
}

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class PropertyComponent {
  properties: Property[] = [];
  selectedProperty: Property | null = null;
  propertyForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.propertyForm = this.fb.group({
      name: [''],
      city: ['']
    });
  }

  addProperty() {
    // Implement add property logic
  }

  editProperty(property: Property) {
    this.selectedProperty = property;
    this.propertyForm.patchValue(property);
  }

  deleteProperty(id: number) {
    // Implement delete property logic
  }

  onSubmit() {
    if (this.selectedProperty) {
      // Update existing property
    } else {
      // Add new property
    }
  }
}
