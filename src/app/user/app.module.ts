import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Çift `NgModule` importunu düzelttim
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { UserComponent } from '../user/user.component';
import { PropertyComponent } from '../property/property.component';
import { LogComponent } from '../log/log.component';

@NgModule({
  declarations: [
    UserComponent,
    PropertyComponent,
    LogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }