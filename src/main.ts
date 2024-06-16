import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './enviroments/enviroment';
import { AppModule } from './app/user/app.module';

import { AppComponent } from './app/models/app.component'; // AppComponent importu

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule) // bootstrapModule ile AppModule'u başlat
  .catch(err => console.error(err));
