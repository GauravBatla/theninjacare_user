import { MbscModule } from '@mobiscroll/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, IonRouterOutlet } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor } from './services/http.config.interceptor';
import { IonicStorageModule } from '@ionic/storage-angular';
import { NativeGeocoder } from '@awesome-cordova-plugins/native-geocoder/ngx';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [ 
    MbscModule, BrowserModule, IonicModule.forRoot({mode: 'ios'}), AppRoutingModule, HttpClientModule, IonicStorageModule.forRoot(), FormsModule, ReactiveFormsModule, BrowserAnimationsModule,MatDatepickerModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, NativeGeocoder, CallNumber, EmailComposer, { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
