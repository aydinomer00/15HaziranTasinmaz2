import { Routes } from '@angular/router';
import { AppComponent } from './models/app.component';
import { PropertyComponent } from './property/property.component';
import { LogComponent } from './log/log.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'properties', component: PropertyComponent },
  { path: 'logs', component: LogComponent },
  { path: 'users', component: UserComponent }
];
