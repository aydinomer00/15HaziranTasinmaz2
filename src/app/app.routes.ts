import { Routes } from '@angular/router';
import { PropertyComponent } from './property/property.component';
import { LogComponent } from './log/log.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  { path: '', redirectTo: '/properties', pathMatch: 'full' },
  { path: 'properties', component: PropertyComponent },
  { path: 'logs', component: LogComponent },
  { path: 'users', component: UserComponent },
];
