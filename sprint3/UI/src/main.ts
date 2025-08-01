import {enableProdMode, importProvidersFrom} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {AppRoutingModule} from './app/app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ContentTypeInterceptor} from './app/_helpers/contenttype.interceptor';

import {environment} from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      AppRoutingModule,
      HttpClientModule,
      BrowserAnimationsModule,
    ),
    { provide: HTTP_INTERCEPTORS, useClass: ContentTypeInterceptor, multi: true },
  ]
});
