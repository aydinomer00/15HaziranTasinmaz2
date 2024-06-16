import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from '../models/app.component';
import { UserComponent } from '../user/user.component';
import { PropertyComponent } from '../property/property.component';
import { LogComponent } from '../log/log.component';
import { routes } from '../app.routes';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PropertyComponent,
    LogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
