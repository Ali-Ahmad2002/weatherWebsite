import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';	
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherDataComponent } from './weather-data/weather-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    WeatherDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
