import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgDrawContainerComponent } from './components/ng-draw-container/ng-draw-container.component';
import { NgDrawDisplayComponent } from './components/ng-draw-display/ng-draw-display.component';
import { NgDrawRulerComponent } from './components/ng-draw-ruler/ng-draw-ruler.component';
import { NgDrawLineComponent } from './components/ng-draw-line/ng-draw-line.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    NgDrawContainerComponent,
    NgDrawDisplayComponent,
    NgDrawRulerComponent,
    NgDrawLineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {})
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
