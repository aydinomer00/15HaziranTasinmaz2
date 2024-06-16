import { Component, OnInit } from '@angular/core';
import { Property } from '../models/property.model';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  properties: Property[] = [
    {
      id: 1,
      name: 'Property 1',
      propertyId: 101,
      userId: 1,
      city: 'City 1',
      district: 'District 1',
      neighborhood: 'Neighborhood 1',
      plot: 'Plot 1',
      parcel: 'Parcel 1',
      type: 'Type 1',
      coordinates: 'Coordinates 1'
    },
    {
      id: 2,
      name: 'Property 2',
      propertyId: 102,
      userId: 2,
      city: 'City 2',
      district: 'District 2',
      neighborhood: 'Neighborhood 2',
      plot: 'Plot 2',
      parcel: 'Parcel 2',
      type: 'Type 2',
      coordinates: 'Coordinates 2'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
