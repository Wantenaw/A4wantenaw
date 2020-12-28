import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material-ui/material-ui.module';
import { BackgroundInfoComponent } from './background-info/background-info.component';
import { ProvinceCapitalsComponent } from './province-capitals/province-capitals.component';
import { ProvinceImagesComponent } from './province-images/province-images.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundInfoComponent,
    ProvinceCapitalsComponent,
    ProvinceImagesComponent,
    PersonalInfoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
